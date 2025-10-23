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
  admin: {
    useAsTitle: 'filename',
  },
  fields: [
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
        const baseCdnUrl = process.env.NEXT_PUBLIC_CDN_URL

        const uploadUrl = `${bunnyStorageUrl}/${bunnyZone}/cms/${filename}`
        console.log(process.env.CDN_API_STORAGE_SECRET)
        // Upload
        await axios.put(uploadUrl, newFileData.buffer, {
          headers: {
            AccessKey: process.env.CDN_API_STORAGE_SECRET!,
            'Content-Type': 'application/octet-stream',
          },
        })

        // Nastav data pro uložení do databáze
        const imageCdnUrl = `${baseCdnUrl}/cms/${filename}`

        const placeholderUrl = `${imageCdnUrl}?width=200`

        // Můžeš tu klidně přidat placeholder variantu (např. ?width=200)

        data.url = imageCdnUrl
        data.placeholder = placeholderUrl
        data.mimeType = newFileData.mimetype
        data.image = filename
        data.filename = filename

        // Není potřeba vracet req.file, protože nic neukládáš lokálně
        delete req.file
        return data
      },
    ],
  },
}
