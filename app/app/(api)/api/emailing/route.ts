import { NextRequest, NextResponse } from "next/server";
import { EmailSegments, resend } from "@roo/shared/src/email";
import { returnWithSuccess } from "@roo/shared/src/functions/api/returnWithSuccess";

export type ApisEmailingPostBody = {
  email: string;
  segment: EmailSegments;
  [key: string]: any;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ApisEmailingPostBody;

  try {
    if (!body.email) {
      throw Error("Email is missing");
    }
    await resend.subscribeContact({
      ...body,
    });

    return NextResponse.json(returnWithSuccess({ success: true }), {
      status: 200,
    });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected error";

    return NextResponse.json(
      returnWithSuccess({ success: false, message: message }),
      { status: 500 }
    );
  }
}
