const message: string = "Hello World";
console.log(Deno.args);
// Deno.env
console.log(Deno.env.get('DEVELOPMENT'));
// Deno.cwd
console.log(Deno.cwd());

export { };
