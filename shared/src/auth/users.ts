export const userRoles = {
  admin: "customer",
  editor: "business",
};

export type UserRoles = keyof typeof userRoles;

export const adminRoles = {
  superadmin: "superadmin",
  admin: "admin",
  editor: "editor",
};

export type AdminRoles = keyof typeof adminRoles;
