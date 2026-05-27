const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("songs_source.example.js", "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${source}; this.SONGS = SONGS;`, context);

const requiredLanguages = ["zh", "en", "ja"];

for (const language of requiredLanguages) {
  if (!Array.isArray(context.SONGS[language])) {
    throw new Error(`SONGS.${language} 必須是陣列`);
  }
}

const japaneseSong = context.SONGS.ja.find((song) => song.id === "yuika-17-sai-no-uta");

if (!japaneseSong) {
  throw new Error("找不到ユイカ/Yuika 17さいのうた示範資料");
}

for (const row of japaneseSong.lyrics) {
  for (const field of ["original", "romaji", "zh"]) {
    if (typeof row[field] !== "string" || row[field].trim() === "") {
      throw new Error(`日文歌詞每列都必須包含 ${field}`);
    }
  }

  if (row.ruby) {
    if (!Array.isArray(row.ruby)) {
      throw new Error("ruby 必須是陣列");
    }

    for (const part of row.ruby) {
      if (typeof part !== "string" && (!part.text || !part.reading)) {
        throw new Error("ruby 物件必須包含 text 與 reading");
      }
    }
  }
}

console.log("test_data.js ok");
