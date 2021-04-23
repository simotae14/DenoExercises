import { Handlebars } from "../deps.ts";

// create an istance of Handlebars passing a configuration object
const hbs = new Handlebars({
  baseDir: "views",
  extname: ".hbs",
  layoutsDir: "layouts/",
  partialsDir: "",
  defaultLayout: "main",
  helpers: undefined,
  compilerOptions: undefined
});

export default hbs;
