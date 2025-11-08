import { ACL } from '@/functions/ACL'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { userRoles } from '@roo/shared/auth/users'
import dotenv from 'dotenv'
import type { CollectionConfig } from 'payload'
dotenv.config()

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    verify: true,
    forgotPassword: {
      generateEmailHTML: (args) => {
        if (!args) return ''

        const { token, user } = args as {
          token: string
          user: { email: string }
        }

        const resetPasswordUrl = `${'url'}/lost-password?token=${token}`

        return `
          <!doctype html>
          <html>
            <body>
              <h1>Vyliž mi prdel!</h1>
              <p>Hello, ${user.email}!</p>
              <p>Click below to reset your password.</p>
              <p>
                <a href="${resetPasswordUrl}">${resetPasswordUrl}</a>
              </p>
            </body>
          </html>
        `
      },
    },
  },
  access: {
    create: () => true,
    read: ACL({ roles: ['admin'] }),
    update: ACL({ roles: ['admin'] }),
    delete: ACL({ roles: ['admin'] }),
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: getOptionsFromObject(userRoles),
      defaultValue: 'user',
      saveToJWT: true,
    },
    {
      name: 'isAdvertiser',
      type: 'checkbox',
      defaultValue: false,
    },

    // Email added by default
    // Add more fields as needed
  ],

  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        const isAdmin = req.user?.role === 'admin'
        if (!data) return

        if (!isAdmin) {
          data.role = 'user'
        }

        return data
      },
    ],
  },
}
