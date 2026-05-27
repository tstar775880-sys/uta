const crypto = require("crypto");
const fs = require("fs");
const vm = require("vm");

const inputPath = "songs_source.js";
const outputPath = "encrypted_songs.js";
const password = process.argv[2];

if (!password) {
  throw new Error("請提供加密密碼，例如：node tools/encrypt_songs.js uta2026");
}

if (!fs.existsSync(inputPath)) {
  throw new Error("找不到 songs_source.js。請先複製 songs_source.example.js 成 songs_source.js。");
}

const source = fs.readFileSync(inputPath, "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${source}; this.SONGS = SONGS;`, context);

const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const iterations = 210000;
const key = crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256");
const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const plaintext = JSON.stringify(context.SONGS);
const encrypted = Buffer.concat([
  cipher.update(plaintext, "utf8"),
  cipher.final()
]);
const tag = cipher.getAuthTag();
const payload = Buffer.concat([encrypted, tag]);

const output = `const ENCRYPTED_SONGS = ${JSON.stringify({
  kdf: "PBKDF2",
  hash: "SHA-256",
  iterations,
  salt: salt.toString("base64"),
  iv: iv.toString("base64"),
  data: payload.toString("base64")
}, null, 2)};\n`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`已產生 ${outputPath}`);
