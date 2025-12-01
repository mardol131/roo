import { AddContactFromLandingPageFormTemplateType } from "@/app/_api/emailing";
import { brevo } from "@roo/shared/src/email";
import { returnResponse } from "@roo/shared/src/functions/api/returnResponse";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as AddContactFromLandingPageFormTemplateType;

  if (!body.email) {
    return returnResponse({
      success: false,
      status: 400,
      message: "Email is missing",
    });
  }

  const response = await brevo.addContactToList({
    email: body.email,
    listId: body.list,
    attributes: body.attributes,
  });

  return returnResponse({
    success: true,
    status: 200,
  });
}
