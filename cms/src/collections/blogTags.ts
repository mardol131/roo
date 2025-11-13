import { ACL } from '@/functions/ACL'
import type { CollectionConfig } from 'payload'

export const BlogTags: CollectionConfig = {
  slug: 'blog-tags',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
  ],
  access: {
    read: () => true,
    create: ACL({ roles: ['admin'] }),
    delete: ACL({ roles: ['admin'] }),
    update: ACL({ roles: ['admin'] }),
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.title) {
          data.slug = data.title
            .normalize('NFD') // rozdělí písmena a diakritiku (např. č -> c + ̌)
            .replace(/[\u0300-\u036f]/g, '') // odstraní diakritiku
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // nahradí mezery a nealfanumerické znaky pomlčkou
            .replace(/(^-|-$)+/g, '') // odstraní pomlčky na začátku a konci
        }
        return data
      },
    ],
  },
}
