export type ReturnWithSuccess = { success: boolean; message?: string };

export function returnWithSuccess({
  success,
  message,
  data,
}: ReturnWithSuccess & {
  data?: { [key: string]: any };
}) {
  return { success: success, message: message, data: data };
}
