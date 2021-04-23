import { Application, Router, send } from "./deps.ts";
import * as indexRouter from "./routes/indexRouter.ts";
import * as usersRouter from "./routes/usersRouter.ts";

const PORT = 3001;
const HOSTNAME = "0.0.0.0";

// create an Application instance
const app = new Application();
// create a Router instance
const router = new Router();

indexRouter.use("/", router);

usersRouter.use("/users", router);

// static files route
router.get("/public/:path+", async (ctx) => {
  console.log("path", ctx.params.path);
  // send back the static file
  /* Solution 1: using ctx.params.path
  await send(ctx, ctx.params.path || "", {
    root: `${Deno.cwd()}/public`
  });
  */
  // Solution 2: using ctx.request.url.pathname
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd()
  });
});

// global handling Errors
app.addEventListener("error", err => {
  console.log(err);
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Now listening on http://${HOSTNAME}:${PORT}`);

// listen
app.listen({
  port: PORT,
  hostname: HOSTNAME
});
