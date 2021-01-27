const readline = require("readline");

const quotes = require("./data/quotes.json");

const HEADER_TEXT = "* MANDRIL CLI *";

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "BANG BANG> ",
});

// Print header
printHeader();

// Display prompt
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
  console.log("Det tror jeg nok vi gør!");
  process.exit(0);
});

function printHeader() {
  printStars();
  console.log(HEADER_TEXT);
  printStars();
  console.log();
}

function printStars() {
  let stars = "";
  for (let i = 0; i < HEADER_TEXT.length; i++) {
    stars += "*";
  }
  console.log(stars);
}
