import { brevoEmailingListsIds, BrevoEmailingListsIds } from "../types/types";
import { ContactsApi, CreateContact } from "@getbrevo/brevo";

type AddContactWithEmail = {
  email: string;
  listId: BrevoEmailingListsIds;
  attributes?: Record<string, any>;
};

type AddContactToSegment = AddContactWithEmail;

export async function addContactToList(props: AddContactToSegment) {
  let contactApi = new ContactsApi();
  (contactApi as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;
  const listId = brevoEmailingListsIds[props.listId];

  const transformedAttributes = Object.fromEntries(
    Object.entries(props.attributes || {}).map(([key, value]) => [
      key.toUpperCase(),
      value,
    ])
  );
  let contactData: CreateContact = {
    email: props.email,
    attributes: transformedAttributes,
    listIds: [listId],
    updateEnabled: true,
  };

  const response = await contactApi.createContact(contactData);
}
