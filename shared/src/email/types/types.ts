export const emailSegments = {
  RooContact: "b7ace420-93f4-4f08-8ea2-c2871ea7ef13",
  RooNewsletter: "c0786636-8a27-44db-a588-e3138c3d335c",
  RooWaitlist: "49657996-c0be-4d8e-ba14-210a917a87cc",
  General: "52539965-ce26-4b04-863c-6203e129e769",
};

export type EmailSegments = keyof typeof emailSegments;

export type ResendContactProperties =
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
