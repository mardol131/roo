import { addContactToSegment } from "./functions/addContactToSegment";
import { sendEmail } from "./functions/sendEmail";
import { subscribeContact } from "./functions/subscribeContact";
export declare const resend: {
    sendEmail: typeof sendEmail;
    subscribeContact: typeof subscribeContact;
    addContactToSegment: typeof addContactToSegment;
};
