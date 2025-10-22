import { roles } from '@/design/roles'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import type { CollectionConfig } from 'payload'
import payload from 'payload'
import dotenv from 'dotenv'
dotenv.config()

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: getOptionsFromObject(roles),
      required: true,
      defaultValue: 'user',
      saveToJWT: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
  access: {
    create: () => true,
  },
}
