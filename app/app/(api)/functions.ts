export function sendError({
  code,
  message,
}: {
  code: number;
  message: string;
}) {
  return new Response(JSON.stringify({ error: message }), {
    status: code,
    headers: { "Content-Type": "application/json" },
  });
}
