import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const PORT = 3001;
const HOSTNAME = "0.0.0.0";

// create an Application instance
const app = new Application();
// create a Router instance
const router = new Router();

// create an handler for the / GET
router.get("/", (ctx) => {
  ctx.response.body = "Index Page";
});

// create an handler for the /users GET
router.get("/users", ctx => {
  ctx.response.body = "Users Page";
});

// create an handler for the /users/:name GET
router.get("/users/:name", ctx => {
  ctx.response.body = ctx.params.name;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Now listening on http://${HOSTNAME}:${PORT}`);

// listen
app.listen({
  port: PORT,
  hostname: HOSTNAME
});
