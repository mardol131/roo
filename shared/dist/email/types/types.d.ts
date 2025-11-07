export declare const emailSegments: {
    RooContact: string;
    RooNewsletter: string;
    RooWaitlist: string;
    General: string;
};
export type EmailSegments = keyof typeof emailSegments;
export type ResendContactProperties = "countryCode" | "marketing" | "gdpr" | "reference" | "companyType" | "services" | "phone" | "web" | "message" | "company";
