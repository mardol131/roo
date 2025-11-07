import { Resend } from "resend";
import { EmailSegments, ResendContactProperties } from "../types/types";

type SubscribeContactProps = {
  email: string;
  segment: EmailSegments;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
};

export async function subscribeContact(props: SubscribeContactProps) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, firstName, lastName, segment, ...rest } = props;

    let propertyPairs: {
      countryCode: string | null;
      marketing: string | null;
      gdpr: string | null;
      reference: string | null;
      companyType: string | null;
      services: string | null;
      phone: string | null;
      web: string | null;
      company: string | null;
      message: string | null;
    } = {
      message: null,
      countryCode: null,
      marketing: null,
      gdpr: null,
      reference: null,
      companyType: null,
      services: null,
      phone: null,
      web: null,
      company: null,
    };

    if (rest && (segment === "RooContact" || segment === "RooWaitlist")) {
      for (const [key, value] of Object.entries(rest)) {
        const keyType = key as ResendContactProperties;
        if (key in propertyPairs) {
          if (Array.isArray(value)) {
            propertyPairs[keyType] = value.join(",");
          } else if (typeof value !== "string") {
            propertyPairs[keyType] = JSON.stringify(value);
          } else {
            propertyPairs[keyType] = value;
          }
        }
      }
    }
    const response = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      properties: propertyPairs,
    });

    const contactId = response.data?.id;

    return response;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(String(e));
  }
}
