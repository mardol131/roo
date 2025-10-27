import { RolesType } from '@roo/shared/auth/users'
import { AccessArgs } from 'payload'

type WhoHasAccessProps = AccessArgs & { allowedRoles: RolesType[] }

export const isAdminOrCreatedBy = ({ req: { user } }: AccessArgs) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }

  // Scenario #2 - Allow only documents with the current user set to the 'createdBy' field
  if (user) {
    // Will return access for only documents that were created by the current user
    return {
      createdBy: {
        equals: user.id,
      },
    }
  }

  // Scenario #3 - Disallow all others
  return false
}

export const whoHasAccess =
  (allowedRoles: RolesType[]) =>
  ({ req: { user } }: AccessArgs) => {
    const isAllowed = allowedRoles.some((role) => role === user?.role)

    if (isAllowed) {
      return true
    }

    if (user) {
      return {
        createdBy: {
          equals: user.id,
        },
      }
    }

    return false
  }
