import { brevoEmailingListsIds } from "../types/types";
import { ContactsApi } from "@getbrevo/brevo";
export async function addContactToList(props) {
    let contactApi = new ContactsApi();
    contactApi.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;
    const listId = brevoEmailingListsIds[props.listId];
    const transformedAttributes = Object.fromEntries(Object.entries(props.attributes || {}).map(([key, value]) => [
        key.toUpperCase(),
        value,
    ]));
    let contactData = {
        email: props.email,
        attributes: transformedAttributes,
        listIds: [listId],
        updateEnabled: true,
    };
    const response = await contactApi.createContact(contactData);
}
