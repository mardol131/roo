import type { CollectionConfig } from 'payload'
import axios from 'axios'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        const file = req.file
        if (!file) {
          return
        }

        await axios.put(
          `https://storage.bunnycdn.com/${process.env.BUNNY_STORAGE_ZONE}/${file.name}`,
          file.data.buffer,
          {
            headers: {
              AccessKey: process.env.CDN_API_SECRET!,
              'Content-Type': 'application/octet-stream',
            },
          },
        )
        return
      },
    ],
  },
}
