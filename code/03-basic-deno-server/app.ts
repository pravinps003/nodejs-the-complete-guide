import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

const port = 3000;

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:3000/`);
await serve(handler, { port });
