const readline = require("readline");

const quotes = require("./data/quotes.json");

const START_HEADER_TEXT = "!! MANDRIL BOT !!";
const END_HEADER_TEXT = "!! THE END (kan du så forstå det, Marianne ..) !!";

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "BANG BANG> ",
});

// Start "bot"
printBox(START_HEADER_TEXT);
rl.prompt();

// Read input
rl.on("line", (line) => {
  switch (line.toLowerCase().trim()) {
    case "spis ild":
      const index = Math.floor(Math.random() * quotes.length);
      const quote = quotes[index];
      console.log(quote + "\n");
      break;
    case "slesvig?":
      rl.emit("close", "Slesvig?");
      break;
    default:
      console.log(
        "Nu går det MEGET hurtigt, der ville jeg godt lige ha' haft LIDT mere forberedelsesti-id..\n"
      );
      break;
  }
  rl.prompt();
});

// Handle close
rl.on("close", (args) => {
  if (!args) {
    console.log("Slesvig?");
  }
  console.log("Det tror jeg nok vi gør!\n");
  printBox(END_HEADER_TEXT);
  process.exit(0);
});

function printBox(text) {
  printStars(text);
  console.log(text);
  printStars(text);
  console.log();
}

function printStars(text) {
  let stars = "";
  for (let i = 0; i < text.length; i++) {
    stars += "*";
  }
  console.log(stars);
}
