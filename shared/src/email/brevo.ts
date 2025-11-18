import { addContactToList } from "./functions/addContactToSegment";
import { sendEmail } from "./functions/sendEmail";
import { subscribeContact } from "./functions/subscribeContact";

export const brevo = {
  sendEmail,
  subscribeContact,
  addContactToList,
};
