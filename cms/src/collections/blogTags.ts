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
  ],
  access: {
    read: () => true,
    create: ACL({ roles: ['admin'] }),
    delete: ACL({ roles: ['admin'] }),
    update: ACL({ roles: ['admin'] }),
  },
}
