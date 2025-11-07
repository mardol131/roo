export function returnResponse({ success, message, data, status, }) {
    return Response.json({ success: success, message: message, data: data }, { status: status || 400 });
}
