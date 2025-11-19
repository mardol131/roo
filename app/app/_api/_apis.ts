import { insertContact } from "./emailing";
import { apiPost } from "./general";

export const apis = {
  emailing: {
    insertContact,
  },
  general: {
    apiPost,
  },
};
