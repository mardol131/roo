import { EmailSegments } from "shared/src/email/types/types";
import { ReturnResponse } from "shared/src/functions/api/returnResponse";

export type AddContactFromLandingPageFormTemplateType = {
  email: string;
  segment: EmailSegments;
  [key: string]: any;
};

export async function formTemplateSubmit({
  email,
  segment,
  ...rest
}: AddContactFromLandingPageFormTemplateType): Promise<ReturnResponse> {
  const body: AddContactFromLandingPageFormTemplateType = {
    email: email,
    segment: segment,
    ...rest,
  };
  const response = await fetch("/api/forms/submit-template", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  return json;
}
