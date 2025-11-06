import { Resend } from "resend";
import { EmailSegments } from "../types/segments";
import { addContactToSegment } from "./addContactToSegment";

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

    let propertyPairs: { [key: string]: any } = {};

    if (rest) {
      for (const [key, value] of Object.entries(rest)) {
        propertyPairs[key] = JSON.stringify(value);
      }
    }

    const response = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      properties: propertyPairs,
    });

    const contactId = response.data?.id;

    if (contactId) {
      await addContactToSegment({ contactId, segment });
    } else {
      await addContactToSegment({ email, segment });
    }

    return { id: contactId };
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(String(e));
  }
}
