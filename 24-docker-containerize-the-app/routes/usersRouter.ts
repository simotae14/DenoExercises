import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  // create an handler for the / GET
  router.get("/users", (ctx) => {
    ctx.response.body = "Users Page";
  });
}
