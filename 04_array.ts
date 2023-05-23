const names: string[] = ["vladilen", "elena", "igor"];
// const names: any[] = ["vladilen", "elena", "igor", 42];

names.push("eva");
//name.push(true)//error

for (let name of names) {
  console.log(name.toUpperCase());
}

const result = names
  .filter((n) => n !== "igor")
  .map((n) => n.length)
  .reduce((acc, cur) => (acc += cur), 0);

console.log(result);
