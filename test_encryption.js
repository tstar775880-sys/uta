const crypto = require("crypto");
const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("encrypted_songs.js", "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${source}; this.ENCRYPTED_SONGS = ENCRYPTED_SONGS;`, context);

const payload = context.ENCRYPTED_SONGS;
const salt = Buffer.from(payload.salt, "base64");
const iv = Buffer.from(payload.iv, "base64");
const data = Buffer.from(payload.data, "base64");
const encrypted = data.subarray(0, data.length - 16);
const tag = data.subarray(data.length - 16);
const key = crypto.pbkdf2Sync("147741", salt, payload.iterations, 32, "sha256");
const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
decipher.setAuthTag(tag);

const decrypted = Buffer.concat([
  decipher.update(encrypted),
  decipher.final()
]).toString("utf8");

const songs = JSON.parse(decrypted);

if (!songs.ja.find((song) => song.id === "yuika-17-sai-no-uta")) {
  throw new Error("解密後找不到日文示範歌曲");
}

console.log("test_encryption.js ok");
