import { AccessArgs } from 'payload'

export const isLoggedIn = ({ req: { user } }: AccessArgs) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user) {
    if (user.role === 'admin') return true
  }
  // Scenario #3 - Disallow all others
  return false
}
