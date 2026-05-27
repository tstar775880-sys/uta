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
    ["kana", "片假名"],
    ["romaji", "羅馬拼音"],
    ["zh", "中文"]
  ]
};

let SONGS = {
  zh: [],
  en: [],
  ja: []
};
let activeLanguage = "zh";
let activeSongId = null;

const lockScreen = document.querySelector("#lock-screen");
const appRoot = document.querySelector("#app-root");
const passwordForm = document.querySelector("#password-form");
const passwordInput = document.querySelector("#site-password");
const passwordError = document.querySelector("#password-error");
const tabButtons = document.querySelectorAll(".tab-button");
const songList = document.querySelector("#song-list");
const songListTitle = document.querySelector("#song-list-title");
const songCount = document.querySelector("#song-count");
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
  activeSongId = SONGS[language][0]?.id ?? null;

  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === language);
  });

  renderSongList();
  renderSelectedSong();
}

function renderSongList() {
  const songs = SONGS[activeLanguage];
  songListTitle.textContent = `${LANGUAGE_LABELS[activeLanguage]}清單`;
  songCount.textContent = `${songs.length} 首`;
  songList.innerHTML = "";

  if (songs.length === 0) {
    const empty = document.createElement("p");
    empty.className = "notice";
    empty.textContent = "目前沒有歌曲資料。";
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
  lyricsMode.textContent = activeLanguage === "ja" ? "四行對照" : activeLanguage === "en" ? "雙語對照" : "中文歌詞";
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
      textElement.textContent = row[key] || "（尚未填寫）";

      line.append(labelElement, textElement);
      rowElement.append(line);
    });

    lyricsContent.append(rowElement);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveLanguage(button.dataset.tab));
});

passwordForm.addEventListener("submit", handlePasswordSubmit);
