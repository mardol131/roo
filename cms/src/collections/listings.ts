import { isAdminOrCreatedBy } from '@/functions/isAdminOrCreatedBy'
import { isLoggedIn } from '@/functions/isLoggedIn'
import type { CollectionConfig } from 'payload'

export const Listings: CollectionConfig = {
  slug: 'listings',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'ico',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'phone',
      type: 'number',
      max: 1000000000,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => true,
      },
      admin: {
        readOnly: false,
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user?.id
            return data
          }
        }
      },
    ],
  },
  access: {
    read: isAdminOrCreatedBy,
    create: isLoggedIn,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy,
  },
}
