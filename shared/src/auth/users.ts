export const roles = {
  admin: "admin",
  editor: "editor",
  customer: "customer",
  advertiser: "advertiser",
};

export type RolesType = keyof typeof roles;
