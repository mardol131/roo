export const brevoEmailingListsIds = {
  general: 7,
  newsletter: 5,
  waitlist: 8,
  contact: 9,
};

export type BrevoEmailingListsIds = keyof typeof brevoEmailingListsIds;

export type BrevoWaitlistAttributes =
  | "countryCode"
  | "marketing"
  | "gdpr"
  | "reference"
  | "companyType"
  | "services"
  | "phone"
  | "web"
  | "message"
  | "company";
