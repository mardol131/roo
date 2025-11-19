import { BrevoEmailingListsIds } from "shared/src/email";
import { ReturnResponse } from "shared/src/functions/api/returnResponse";

export type AddContactFromLandingPageFormTemplateType = {
  email: string;
  list: BrevoEmailingListsIds;
  attributes?: { [key: string]: any };
};

export async function insertContact({
  email,
  list,
  attributes,
}: AddContactFromLandingPageFormTemplateType): Promise<ReturnResponse> {
  const body: AddContactFromLandingPageFormTemplateType = {
    email: email,
    list: list,
    attributes: attributes,
  };
  const response = await fetch("/api/emailing/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  return json;
}
