import {
  brevoTemplateIds,
  BrevoTemplateIds,
} from "../templates/brevoTemplateIds";
import { brevoEmailingListsIds, BrevoEmailingListsIds } from "../types/types";
import {
  ContactsApi,
  CreateContact,
  CreateEmailCampaign,
  EmailCampaignsApi,
  SendSmtpEmail,
} from "@getbrevo/brevo";

type AddContactWithEmail = {
  email: string;
  templateId: BrevoTemplateIds;
  attributes?: Record<string, any>;
};

type AddContactToSegment = AddContactWithEmail;

export async function addContactToList(props: AddContactToSegment) {
  let contactApi = new EmailCampaignsApi();
  (contactApi as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;
  const templateId = brevoTemplateIds[props.templateId];

  const transformedAttributes = Object.fromEntries(
    Object.entries(props.attributes || {}).map(([key, value]) => [
      key.toUpperCase(),
      value,
    ])
  );
  //   let contactData: SendSmtpEmail = {
  //     email: props.email,
  //     attributes: transformedAttributes,
  //     listIds: [listId],
  //     updateEnabled: true,
  //   };

  //   return await contactApi.createContact(contactData);
}
