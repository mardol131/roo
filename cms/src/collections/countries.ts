import { ACL } from '@/functions/ACL'
import { createSlug } from 'node_modules/@roo/shared/src/functions/data-manipulation/createSlug'
import type { CollectionConfig } from 'payload'

export const Countries: CollectionConfig = {
  slug: 'countries',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'number',
      required: true,
    },
  ],
  access: {
    read: () => true,
    delete: ACL({ roles: ['superadmin'] }),
    update: ACL({ roles: ['superadmin'] }),
    create: ACL({ roles: ['superadmin'] }),
  },
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (!data.slug) {
          data.slug = createSlug(data.name)
        }
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user?.id
          }
        }
        return data
      },
    ],
  },
}
