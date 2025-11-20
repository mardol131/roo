import { brevoTemplateIds, } from "../templates/brevoTemplateIds";
import { EmailCampaignsApi, } from "@getbrevo/brevo";
export async function addContactToList(props) {
    let contactApi = new EmailCampaignsApi();
    contactApi.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;
    const templateId = brevoTemplateIds[props.templateId];
    const transformedAttributes = Object.fromEntries(Object.entries(props.attributes || {}).map(([key, value]) => [
        key.toUpperCase(),
        value,
    ]));
    //   let contactData: SendSmtpEmail = {
    //     email: props.email,
    //     attributes: transformedAttributes,
    //     listIds: [listId],
    //     updateEnabled: true,
    //   };
    //   return await contactApi.createContact(contactData);
}
