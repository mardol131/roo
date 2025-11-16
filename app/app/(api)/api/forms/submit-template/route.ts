import { sendEmailTemplate } from "./functions/sendEmailTemplate";
import { resend } from "@roo/shared/src/email";
import { NextRequest } from "next/server";
import { AddContactFromLandingPageFormTemplateType } from "@/app/_api/emailing";
import { returnResponse } from "@roo/shared/src/functions/api/returnResponse";
import { wait } from "@roo/shared/src/functions/wait";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as AddContactFromLandingPageFormTemplateType;

  if (!body.email) {
    return returnResponse({
      success: false,
      status: 400,
      message: "Email is missing",
    });
  }

  // Subscribe
  const createContact = await resend.subscribeContact(body);

  if (createContact.error) {
    console.log(createContact);
    return returnResponse({
      success: false,
      status: 500,
      message: "Contact was not created",
      data: createContact.error,
    });
  }

  await wait(500);

  // Add to segment
  const addToSegment = await resend.addContactToSegment({
    contactId: createContact.data.id,
    segment: body.segment,
  });

  if (!addToSegment.id) {
    console.log(addToSegment);
    return returnResponse({
      success: false,
      status: 500,
      message: "Contact was not added to segment",
    });
  }

  await wait(500);

  // Send emails
  const emailResult = await sendEmailTemplate({
    segment: body.segment,
    email: body.email,
  });

  if (emailResult?.error) {
    console.log(emailResult);
    return returnResponse({
      success: false,
      status: 500,
    });
  }

  return returnResponse({
    success: true,
    status: 200,
  });
}
