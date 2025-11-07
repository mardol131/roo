import { Resend } from "resend";
import { emailSegments } from "../types/types";
export async function addContactToSegment(props) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    let response;
    if (props.email) {
        response = await resend.contacts.segments.add({
            email: props.email,
            segmentId: emailSegments[props.segment],
        });
    }
    else if (props.contactId) {
        response = await resend.contacts.segments.add({
            contactId: props.contactId,
            segmentId: emailSegments[props.segment],
        });
    }
    return {
        id: response?.data?.id,
    };
}
