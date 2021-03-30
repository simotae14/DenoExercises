const message: String = Deno.args[0] || "World";

console.log(`Hello Simo ${message}`);
// formatter trailing commas
const stuff = [
  1,
  2,
  3,
];

// retrieve arguments
console.log(Deno.args);

export {};
