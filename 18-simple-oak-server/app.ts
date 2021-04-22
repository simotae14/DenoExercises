import { Application } from "https://deno.land/x/oak/mod.ts";

const PORT = 3001;
const HOSTNAME = "0.0.0.0";

// create an Application instance
const app = new Application();

// create a middleware
app.use((ctx, next) => {
  console.log("This is a middleware");
  next();
});

// handler for the request
app.use((ctx) => {
  ctx.response.body = "Hello World Oak!"
});

console.log(`Now listening on http://${HOSTNAME}:${PORT}`);

// listen
app.listen({
  port: PORT,
  hostname: HOSTNAME
});
