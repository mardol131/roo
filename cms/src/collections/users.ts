import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import type { CollectionConfig, PayloadRequest } from 'payload'
import payload from 'payload'
import dotenv from 'dotenv'
import { roles } from '@roo/shared/auth/users'
import { User } from '@/payload-types'
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
              <h1>Here is my custom email template!</h1>
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
}
