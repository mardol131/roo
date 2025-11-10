import { AdminRoles, UserRoles } from '@roo/shared/auth/users'
import { AccessArgs } from 'payload'

type ACLConfig = {
  roles?: (AdminRoles | UserRoles)[]
  allowOwner?: boolean
  ownerField?: string
  allowAdminsCollection?: boolean
}

type AccessArgsWithCollection = AccessArgs & {
  collection?: {
    slug: string
  }
}

export const ACL =
  (config: ACLConfig) =>
  ({ req, id, collection }: AccessArgsWithCollection) => {
    const user = req.user
    if (!user) {
      return false
    }

    const {
      roles = [],
      allowOwner = false,
      ownerField = 'user',
      allowAdminsCollection = true,
    } = config

    // 1) Superadmin má neomezený přístup
    if (user.role === 'superadmin') {
      return true
    }

    // 2) Admin kolekce má přednost (pokud povoleno)
    if (allowAdminsCollection && user.collection === 'admins') {
      return true
    }

    if (!user.role) {
      return false
    }

    // 3) Role-based přístup
    if (roles.includes(user.role)) {
      return true
    }

    // 4) Kontrola vlastnictví (např. user může editovat jen své záznamy)
    if (allowOwner && id) {
      // a) jsme v users kolekci → owner = user sám sebe
      if (collection?.slug === 'users') {
        return {
          id: {
            equals: user.id,
          },
        }
      }
      // vrací podmínku jako { user: { equals: user.id } }
      return {
        [ownerField]: {
          equals: user.id,
        },
      }
    }

    return false
  }
