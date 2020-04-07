const readline = require("readline");

const quotes = require("./data/quotes.json");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "BANG BANG> ",
});

rl.prompt();

rl.on("line", (line) => {
  switch (line.toLowerCase().trim()) {
    case "spis ild":
      const index = Math.floor(Math.random() * quotes.length);
      const quote = quotes[index];
      console.log(quote);
      break;
    default:
      console.log(
        "Nu går det MEGET hurtigt, der ville jeg godt lige ha' haft LIDT mere forberedelsesti-id."
      );
      break;
  }
  rl.prompt();
});

rl.on("close", () => {
  console.log("Slesvig? Det tror jeg nok vi gør!");
  process.exit(0);
});
