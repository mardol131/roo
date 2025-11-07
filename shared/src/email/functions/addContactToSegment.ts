import { Resend } from "resend";
import { emailSegments, EmailSegments } from "../types/types";

type AddContactWithEmail = {
  email: string;
  contactId?: string;
  segment: EmailSegments;
};

type AddContactWithId = {
  contactId: string;
  email?: string;
  segment: EmailSegments;
};

type AddContactToSegment = AddContactWithEmail | AddContactWithId;

export async function addContactToSegment(props: AddContactToSegment) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let response;

  if (props.email) {
    response = await resend.contacts.segments.add({
      email: props.email,
      segmentId: emailSegments[props.segment],
    });
  } else if (props.contactId) {
    response = await resend.contacts.segments.add({
      contactId: props.contactId,
      segmentId: emailSegments[props.segment],
    });
  }

  return {
    id: response?.data?.id,
  };
}
