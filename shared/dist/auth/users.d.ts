export declare const userRoles: {
    admin: string;
    editor: string;
};
export type UserRoles = keyof typeof userRoles;
export declare const adminRoles: {
    superadmin: string;
    admin: string;
    editor: string;
};
export type AdminRoles = keyof typeof adminRoles;
