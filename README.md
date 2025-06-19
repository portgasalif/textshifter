# TextShifter 🔐

JavaScript encryption toolkit with multiple cipher algorithms and CLI interface.

## Features

- **Caesar Cipher** - Alphabetical shifting
- **Symbol Cipher** - Character replacement
- **Reverse Cipher** - Word reversal
- **Modular design** - Reusable functions
- **CLI interface** - Easy command-line usage

## Usage

```bash
# Single cipher
node text-shifter.js caesar 4
node text-shifter.js symbol
node text-shifter.js reverse

# Multi-cipher encoder
node super-encoder.js encode
node super-encoder.js decode
```

## Example

```bash
$ node super-encoder.js encode
> hello world
fccvy uc!fn

$ node super-encoder.js decode
> fccvy uc!fn
hello world
```

## Files

- `src/encryptors.js` - Encryption functions module
- `src/text-shifter.js` - Main CLI app
- `src/super-encoder.js` - Multi-cipher tool

## Tech Stack

JavaScript, Node.js, CommonJS modules

---

Built with JavaScript
