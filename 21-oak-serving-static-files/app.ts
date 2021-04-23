import { Application, Router } from "./deps.ts";
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

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Now listening on http://${HOSTNAME}:${PORT}`);

// listen
app.listen({
  port: PORT,
  hostname: HOSTNAME
});
