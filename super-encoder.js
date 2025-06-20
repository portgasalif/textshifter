const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 17)));
};

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -17);
};
/* Helper function for displaying the encrypted message to the user. */
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }
  process.stdout.write(output + "\n");
  process.exit();
};

process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
