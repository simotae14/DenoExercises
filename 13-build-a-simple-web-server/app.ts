import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

// create web server
const server = serve({
  port: PORT,
  hostname: HOSTNAME
});

console.log(`Server now running at http://${HOSTNAME}:${PORT}`);

// listen for requests
for await (const req of server) {
  // respond to requests
  req.respond({
    body: "<h1>Hello World!</h1>"
  });
}
