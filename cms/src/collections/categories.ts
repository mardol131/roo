import { isAdminOrCreatedBy } from '@/functions/isAdminOrCreatedBy'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    { name: 'description', type: 'text', required: true },
  ],
  access: {
    create: isAdminOrCreatedBy,
  },
}
