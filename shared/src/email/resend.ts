import { addContactToSegment } from "./functions/addContactToSegment";
import { sendEmail } from "./functions/sendEmail";
import { subscribeContact } from "./functions/subscribeContact";

export const resend = {
  sendEmail,
  subscribeContact,
  addContactToSegment,
};
