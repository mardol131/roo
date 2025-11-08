export const userRoles = {
  admin: "customer",
  editor: "business",
};

export type RolesType = keyof typeof userRoles;

export const adminRoles = {
  superadmin: "superadmin",
  admin: "admin",
  editor: "editor",
};

export type AdminRolesType = keyof typeof adminRoles;
