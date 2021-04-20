const desc = {
  name: "read",
  path: "../"
} as const;

// query for a permission
console.log(await Deno.permissions.query(desc));

// request permission
const status = await Deno.permissions.request(desc);

// query for a permission
console.log(await Deno.permissions.query(desc));

if (status.state === "granted") {
  const results = await Deno.readDir("../");

  for await (const result of results) {
    console.log(result);
  }
} else {
  console.log("This program need permissions to read the current directory only.");
}
