import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { whoHasAccess } from '@/functions/isAdminOrCreatedBy'
import { adminRoles } from '@roo/shared/auth/users'
import dotenv from 'dotenv'
import type { CollectionConfig } from 'payload'
dotenv.config()

export const Admins: CollectionConfig = {
  slug: 'admins',
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
    create: whoHasAccess(['admin']),
    read: whoHasAccess(['admin']),
    update: whoHasAccess(['admin']),
    delete: whoHasAccess(['admin']),
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: getOptionsFromObject(adminRoles),
      defaultValue: 'user',
      saveToJWT: true,
      access: {
        update: whoHasAccess(['admin']),
      },
    },
  ],
}
