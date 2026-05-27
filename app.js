const LANGUAGE_LABELS = {
  zh: "中文歌",
  en: "英文歌",
  ja: "日文歌"
};

const LYRIC_LABELS = {
  zh: [
    ["zh", "中文"]
  ],
  en: [
    ["original", "英文"],
    ["zh", "中文"]
  ],
  ja: [
    ["original", "日文"],
    ["romaji", "羅馬拼音"],
    ["zh", "中文"]
  ]
};

const JAPANESE_READING_MAP = {
  私: "watashi",
  未熟: "mijuku",
  聴: "ki",
  有難: "arigatou",
  少: "suko",
  大人: "otona",
  本当: "hontou",
  前: "mae",
  向: "mu",
  書: "ka",
  他: "hoka",
  誰: "dare",
  支: "sasae",
  強: "tsuyo",
  拝啓: "haikei",
  未来: "mirai",
  今: "ima",
  生: "i",
  好: "su",
  勝手: "katte",
  盗: "nusun",
  貴方: "anata",
  上手: "jouzu",
  生き方: "ikikata",
  言: "i",
  無駄: "muda",
  意味: "imi",
  離: "hana",
  悲: "kana",
  怒: "okora",
  過去: "kako",
  夢見: "yumemi",
  叶: "kanae",
  情: "nasa",
  歌: "uta",
  綺麗: "kirei",
  世界: "sekai",
  広: "hiro",
  幸: "shiawase",
  準備: "junbi"
};

let SONGS = {
  zh: [],
  en: [],
  ja: []
};
let activeLanguage = "zh";
let activeSongId = null;
let searchQuery = "";

const lockScreen = document.querySelector("#lock-screen");
const appRoot = document.querySelector("#app-root");
const passwordForm = document.querySelector("#password-form");
const passwordInput = document.querySelector("#site-password");
const passwordError = document.querySelector("#password-error");
const tabButtons = document.querySelectorAll(".tab-button");
const songList = document.querySelector("#song-list");
const songListTitle = document.querySelector("#song-list-title");
const songCount = document.querySelector("#song-count");
const songSearch = document.querySelector("#song-search");
const selectedLanguage = document.querySelector("#selected-language");
const selectedTitle = document.querySelector("#selected-title");
const selectedArtist = document.querySelector("#selected-artist");
const lyricsMode = document.querySelector("#lyrics-mode");
const lyricsContent = document.querySelector("#lyrics-content");

function base64ToBytes(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function deriveSongKey(password, salt) {
  const passwordKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: ENCRYPTED_SONGS.iterations,
      hash: ENCRYPTED_SONGS.hash
    },
    passwordKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

async function decryptSongs(password) {
  const salt = base64ToBytes(ENCRYPTED_SONGS.salt);
  const iv = base64ToBytes(ENCRYPTED_SONGS.iv);
  const data = base64ToBytes(ENCRYPTED_SONGS.data);
  const key = await deriveSongKey(password, salt);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return JSON.parse(new TextDecoder().decode(decrypted));
}

function unlockApp() {
  lockScreen.classList.add("is-unlocked");
  appRoot.classList.remove("is-locked");
  appRoot.removeAttribute("aria-hidden");
}

async function handlePasswordSubmit(event) {
  event.preventDefault();
  passwordError.textContent = "";

  try {
    SONGS = await decryptSongs(passwordInput.value);
  } catch (error) {
    passwordError.textContent = "密碼錯誤。";
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  passwordInput.value = "";
  unlockApp();
  setActiveLanguage("ja");
}

function displayTitle(song) {
  if (song.language === "zh") {
    return song.title.zh;
  }

  return `${song.title.original} / ${song.title.zh}`;
}

function displayArtist(song) {
  if (song.language === "zh") {
    return song.artist.zh;
  }

  return `${song.artist.original} / ${song.artist.zh}`;
}

function setActiveLanguage(language) {
  activeLanguage = language;
  activeSongId = getFilteredSongs()[0]?.id ?? null;

  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === language);
  });

  renderSongList();
  renderSelectedSong();
}

function renderSongList() {
  const songs = getFilteredSongs();
  songListTitle.textContent = `${LANGUAGE_LABELS[activeLanguage]}清單`;
  songCount.textContent = `${songs.length} / ${SONGS[activeLanguage].length} 首`;
  songList.innerHTML = "";

  if (songs.length === 0) {
    const empty = document.createElement("p");
    empty.className = "notice";
    empty.textContent = searchQuery ? "找不到符合的歌曲。" : "目前沒有歌曲資料。";
    songList.append(empty);
    return;
  }

  songs.forEach((song) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "song-item";
    button.classList.toggle("is-active", song.id === activeSongId);
    button.dataset.songId = song.id;

    const title = document.createElement("span");
    title.className = "song-title";
    title.textContent = displayTitle(song);

    const artist = document.createElement("span");
    artist.className = "song-artist";
    artist.textContent = displayArtist(song);

    button.append(title, artist);
    button.addEventListener("click", () => {
      activeSongId = song.id;
      renderSongList();
      renderSelectedSong();
    });

    songList.append(button);
  });
}

function getFilteredSongs() {
  const songs = SONGS[activeLanguage];
  const query = normalizeSearchText(searchQuery);

  if (!query) {
    return songs;
  }

  return songs.filter((song) => {
    const fields = [
      song.id,
      song.title?.original,
      song.title?.zh,
      song.artist?.original,
      song.artist?.zh
    ];
    const haystack = normalizeSearchText(fields.filter(Boolean).join(" "));
    return haystack.includes(query) || isFuzzyMatch(haystack, query);
  });
}

function normalizeSearchText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/\s+/g, "");
}

function isFuzzyMatch(haystack, query) {
  let queryIndex = 0;

  for (const char of haystack) {
    if (char === query[queryIndex]) {
      queryIndex += 1;
    }

    if (queryIndex === query.length) {
      return true;
    }
  }

  return false;
}

function renderSelectedSong() {
  const song = SONGS[activeLanguage].find((item) => item.id === activeSongId);
  selectedLanguage.textContent = LANGUAGE_LABELS[activeLanguage];

  if (!song) {
    selectedTitle.textContent = "請選擇歌曲";
    selectedArtist.textContent = "";
    lyricsMode.textContent = "";
    lyricsContent.className = "lyrics-content empty-state";
    lyricsContent.textContent = "請先從左側清單選擇一首歌。";
    return;
  }

  selectedTitle.textContent = displayTitle(song);
  selectedArtist.textContent = displayArtist(song);
  lyricsMode.textContent = activeLanguage === "ja" ? "三行對照" : activeLanguage === "en" ? "雙語對照" : "中文歌詞";
  lyricsContent.className = "lyrics-content";
  lyricsContent.innerHTML = "";

  if (song.copyrightNote) {
    const notice = document.createElement("p");
    notice.className = "notice";
    notice.textContent = song.copyrightNote;
    lyricsContent.append(notice);
  }

  song.lyrics.forEach((row) => {
    const rowElement = document.createElement("section");
    rowElement.className = "lyric-row";

    LYRIC_LABELS[activeLanguage].forEach(([key, label]) => {
      const line = document.createElement("div");
      line.className = "lyric-line";

      const labelElement = document.createElement("span");
      labelElement.className = "line-label";
      labelElement.textContent = label;

      const textElement = document.createElement("span");
      textElement.className = "line-text";

      if (activeLanguage === "ja" && key === "original") {
        textElement.classList.add("ruby-lyric");
        renderRubyText(textElement, row);
      } else {
        textElement.textContent = row[key] || "（尚未填寫）";
      }

      line.append(labelElement, textElement);
      rowElement.append(line);
    });

    lyricsContent.append(rowElement);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveLanguage(button.dataset.tab));
});

songSearch.addEventListener("input", () => {
  searchQuery = songSearch.value;
  activeSongId = getFilteredSongs()[0]?.id ?? null;
  renderSongList();
  renderSelectedSong();
});

passwordForm.addEventListener("submit", handlePasswordSubmit);

function renderRubyText(container, row) {
  const parts = Array.isArray(row.ruby)
    ? row.ruby
    : buildJapaneseRubyParts(row.original || "（尚未填寫）");

  parts.forEach((part) => {
    if (typeof part === "string") {
      container.append(document.createTextNode(part));
      return;
    }

    if (isHiraganaOnly(part.text) || !part.reading) {
      container.append(document.createTextNode(part.text));
      return;
    }

    const ruby = document.createElement("ruby");
    const rb = document.createElement("rb");
    const rt = document.createElement("rt");
    rb.textContent = part.text;
    rt.textContent = part.reading;
    ruby.append(rb, rt);
    container.append(ruby);
  });
}

function buildJapaneseRubyParts(text) {
  const parts = [];
  const pattern = /[\u3400-\u9fff\u30a0-\u30ff]+|[^\u3400-\u9fff\u30a0-\u30ff]+/gu;

  for (const match of text.matchAll(pattern)) {
    const value = match[0];

    if (/^[\u3400-\u9fff\u30a0-\u30ff]+$/u.test(value)) {
      parts.push({ text: value, reading: JAPANESE_READING_MAP[value] || "" });
    } else {
      parts.push(value);
    }
  }

  return parts;
}

function isHiraganaOnly(value) {
  return /^[\u3040-\u309fー]+$/u.test(value);
}
