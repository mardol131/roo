import { EmailSegments } from "@roo/shared/src/email";
import { FormTemplates } from "../(landingPages)/_components/formSection/_components/FormTemplate";
import { ApisEmailingPostBody } from "../(api)/api/emailing/route";
import { ReturnWithSuccess } from "@roo/shared/src/functions/api/returnWithSuccess";

export async function addContactFromLandingPageFormTemplate({
  email,
  segment,
  ...rest
}: ApisEmailingPostBody): Promise<ReturnWithSuccess> {
  const body: ApisEmailingPostBody = {
    email: email,
    segment: segment,
    ...rest,
  };
  const response = await fetch("/api/emailing", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  return json;
}
