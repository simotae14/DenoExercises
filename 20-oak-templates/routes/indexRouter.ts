import { Router } from "../deps.ts";
import hbs from "../utils/hbs.ts";

export function use(path: string, router: Router) {
  // create an handler for the / GET
  router.get("/", async (ctx) => {
    ctx.response.body = await hbs.renderView("index", { title: "Oak" });
  });
}
