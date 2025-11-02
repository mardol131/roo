import { registrationSuccessfulEmailTemplate } from "./registrationSuccessfulTemplate";

export const emailTemplateList = {
  registrationSuccessfulEmailTemplate,
};

export type EmailTemplateListType = keyof typeof emailTemplateList;
