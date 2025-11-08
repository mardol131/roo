export const userRoles = {
  customer: "customer",
  coworker: "coworker",
  business: "business",
};

export type UserRoles = keyof typeof userRoles;

export const adminRoles = {
  superadmin: "superadmin",
  admin: "admin",
  editor: "editor",
};

export type AdminRoles = keyof typeof adminRoles;
