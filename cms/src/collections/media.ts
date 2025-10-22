import PlaceholderCell from '@/cells/Placeholder'
import { convertToWebpFile } from '@roo/shared/functions/data-manipulation/convertToWebp'
import axios from 'axios'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/*'],
    adminThumbnail: ({ doc }) => {
      return doc.placeholder as string
    },
  },
  fields: [
    {
      name: 'url',
      type: 'text',
    },

    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'image',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'placeholder',
      type: 'text',
      admin: {
        readOnly: true,
        components: {
          Cell: '@/cells/Placeholder', // Důležité: cesta jako string
        },
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ req, data }) => {
        const fileData = req.file

        if (!fileData) return

        // Přeskoč webp
        if (fileData.mimetype === 'image/webp') return

        if (!data) return

        // Konverze
        const newFileData = await convertToWebpFile(fileData.data, fileData.name)

        const filename = newFileData.filename
        const bunnyZone = process.env.BUNNY_STORAGE_ZONE
        const bunnyStorageUrl = process.env.BUNNY_STORAGE_URL
        const baseCdnUrl = process.env.CDN_URL

        const uploadUrl = `${bunnyStorageUrl}/${bunnyZone}/${filename}`

        // Upload
        await axios.put(uploadUrl, newFileData.buffer, {
          headers: {
            AccessKey: process.env.CDN_API_SECRET!,
            'Content-Type': 'application/octet-stream',
          },
        })

        // Nastav data pro uložení do databáze
        const imageCdnUrl = `${baseCdnUrl}/${filename}`

        // Můžeš tu klidně přidat placeholder variantu (např. ?width=200)
        const placeholderUrl = `${imageCdnUrl}?width=200`

        data.url = imageCdnUrl
        data.placeholder = placeholderUrl
        data.mimeType = newFileData.mimetype
        data.image = imageCdnUrl
        data.filename = filename

        // Není potřeba vracet req.file, protože nic neukládáš lokálně
        delete req.file
        return data
      },
    ],
  },
}
