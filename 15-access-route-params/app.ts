import { serve } from "https://deno.land/std/http/server.ts";
import routeParser from "https://dev.jspm.io/route-parser@0.0.5";
// import Type definition Typescript for Route Parser
import RouteParser from "https://unpkg.com/@types/route-parser@0.1.3/index.d.ts";

// declaration Route
const Route = routeParser as typeof RouteParser;

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

// create web server
const server = serve({
  port: PORT,
  hostname: HOSTNAME
});

console.log(`Server now running at http://${HOSTNAME}:${PORT}`);

// create an instance of Route
const route = new Route("/:name");

// listen for requests
for await (const req of server) {
  // retrieve route params
  const match: any = route.match(req.url);
  // respond to requests
  req.respond({
    body: `<h1>Hello ${match.name}!</h1>`
  });
}
