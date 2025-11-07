export type ReturnResponse = {
  success: boolean;
  message?: string;
  data?: any;
  status?: number;
};

export function returnResponse({
  success,
  message,
  data,
  status,
}: ReturnResponse) {
  return Response.json(
    { success: success, message: message, data: data },
    { status: status || 400 }
  );
}
