const results = await Deno.readDir("../");

for await (const result of results) {
  console.log(result);
}

export {};
