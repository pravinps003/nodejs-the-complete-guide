import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

serve(() => new Response("Hello World\n"), { port: 3000 });
