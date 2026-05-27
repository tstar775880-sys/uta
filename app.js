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
  準備: "junbi",
  放: "hana",
  心: "kokoro",
  刻: "kizan",
  夢: "yume",
  置: "oki",
  去: "zari",
  限界: "genkai",
  知: "shira",
  能力: "chikara",
  光: "hikari",
  散: "chira",
  先: "saki",
  遥: "haruka",
  想: "omoi",
  歩: "arui",
  道: "michi",
  振: "furi",
  返: "kaeru",
  出来: "deki",
  全: "subete",
  壊: "kowaseru",
  暗闇: "kurayami",
  堕: "ochiru",
  街並: "machinami",
  人: "hito",
  立: "ta",
  加速: "kasoku",
  痛: "itami",
  守: "mamoreru",
  身体中: "karadachuu",
  速: "hayasa",
  駆: "kake",
  巡: "megutta",
  確: "tashika",
  予感: "yokan",
  掴: "tsukame",
  望: "nozomu",
  残: "nokosazu",
  輝: "kagayakeru",
  自分: "jibun",
  信: "shinji",
  日: "hi",
  誓: "chikai",
  瞳: "hitomi",
  涙: "namida",
  止: "toma",
  感: "kanji",
  切: "setsu",
  戸惑: "tomadou",
  事: "koto",
  嘘: "uso",
  宙: "sora",
  舞: "mau",
  描: "egaku",
  放物線: "houbutsusen",
  決: "kimeru",
  運命: "unmei",
  打: "uchi",
  答: "kotae",
  今日: "kyou",
  胸: "mune",
  必: "kanarazu",
  貫: "tsuranui",
  途惑: "tomadou",
  傷: "kizu",
  走: "hashiri",
  続: "tsuzukeru",
  狙: "nerae",
  凛: "rin",
  煌: "kirameku",
  視線: "shisen",
  狂: "kurui",
  闇: "yami",
  裂: "saku",
  迷: "mayoi",
  吹: "fuki",
  飛: "tobaseba",
  叫: "sakebu",
  限: "kagiri",
  邪魔: "jama",
  儚: "hakanaku",
  無数: "musuu",
  願: "negai",
  両手: "ryoute",
  積: "tsumotte",
  見: "mie",
  重: "omoku",
  深: "fukaku",
  記憶: "kioku",
  色褪: "iroasete",
  現実: "genjitsu",
  揺: "yureru",
  絶望: "zetsubou",
  負: "maketa",
  張: "hatte",
  誇: "hokoreru",
  前: "omae",
  待: "matsu",
  寂: "sabishii",
  思: "omoi",
  少: "sukuna",
  会: "au",
  路上: "rojou",
  捨: "sute",
  途上: "tochuu",
  気: "ki",
  愛: "ai",
  出会: "deai",
  別: "wakare",
  透: "suketa",
  布: "nuno",
  恐山: "osorezan",
  黒: "kuroi",
  千羽鶴: "senbazuru",
  重: "omoi",
  謎: "nazo",
  抱: "kakae",
  夜: "yoru",
  折: "ore",
  昼: "hiru",
  気丈: "kijou",
  無性: "mushou",
  欲: "hoshiku",
  齢: "yowai",
  千余年: "senyonen",
  小生: "shousei",
  弱: "yowai",
  殻: "kara",
  墓: "haka",
  衆生: "shujou",
  長: "nagara",
  賀正: "gashou",
  不肖: "fushou",
  身: "mi",
  度: "tabi",
  至上: "shijou",
  喜: "yorokobi",
  非情: "hijou",
  微笑: "bishou",
  慕情: "bojou",
  詩: "uta",
  以上: "ijou",
  終: "owari",
  頭上: "zujou",
  国: "kuni",
  地蔵: "jizou",
  夢: "yume",
  未: "ima",
  忘: "wasure",
  物: "mono",
  取: "tori",
  帰: "kaeru",
  古: "furu",
  埃: "hokori",
  払: "harau",
  戻: "modora",
  最後: "saigo",
  教: "oshie",
  隠: "kakushi",
  昏: "kurai",
  永遠: "eien",
  以上: "ijou",
  悲: "kanashi",
  苦: "kurushi",
  残: "nokori",
  苦い: "nigai",
  匂: "nioi",
  雨: "ame",
  降: "furi",
  背: "se",
  輪郭: "rinkaku",
  鮮明: "senmei",
  覚: "oboe",
  受: "uke",
  溢: "afure",
  何: "nani",
  横顔: "yokogao",
  同: "onaji",
  様: "you",
  淋: "sabishi",
  中: "naka",
  願: "negau",
  恋: "koi",
  息: "iki",
  側: "soba",
  確: "tashika",
  分: "wake",
  果実: "kajitsu",
  片方: "katahou",
  君: "kimi",
  赤: "aka",
  青: "ao",
  線: "sen",
  結: "musuba",
  臓: "zou",
  風: "kaze",
  声: "koe",
  届: "todokeru",
  言葉: "kotoba",
  育: "sodate",
  時: "toki",
  星: "hoshi",
  泣: "nai",
  聞: "kika",
  答: "kotae",
  僕: "boku",
  逢: "ae",
  追: "oi",
  足: "tari",
  触: "fure",
  震: "furue",
  越: "koe",
  辿: "tadori",
  愚: "oroka",
  醜: "minikusa",
  正: "tadashi",
  手: "te",
  取: "tori",
  大切: "taisetsu",
  記憶: "kioku",
  気: "ki",
  打: "uchi",
  鳴: "narasu",
  突然: "totsuzen",
  上: "a",
  今夜: "konya",
  良: "ii",
  明: "aka",
  道: "michi",
  抱: "kakae",
  込: "kon",
  孤独: "kodoku",
  不安: "fuan",
  押: "oshi",
  真: "ma",
  夜空: "yozora",
  降: "furu",
  願: "onegai",
  驚: "odoroka",
  指: "yubi",
  夏: "natsu",
  三角: "sankaku",
  織姫: "orihime",
  様: "sama",
  彦星: "hikoboshi",
  楽: "tano",
  隣: "tonari",
  臆病: "okubyou",
  興味: "kyoumi",
  刺: "sasu",
  増: "mashi",
  声: "koe",
  真実: "shinjitsu",
  残酷: "zankoku",
  二度: "nido",
  戻: "modore",
  笑: "waratta",
  顔: "kao",
  怒: "okotta",
  大好: "daisuki",
  秘密: "himitsu",
  夜: "yoru",
  遠: "tooi",
  無邪気: "mujaki",
  オー: "o-",
  ル: "ru",
  ヴォワール: "vowa-ru",
  ブロマイド: "buromaido"
};

const SONG_SORTERS = {
  zh: new Intl.Collator("zh-Hant-u-co-zhuyin", { numeric: true, sensitivity: "base" }),
  en: new Intl.Collator("en", { numeric: true, sensitivity: "base" }),
  ja: new Intl.Collator("ja", { numeric: true, sensitivity: "base" })
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
  const songs = getSortedSongs(activeLanguage);
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

function getSortedSongs(language) {
  return [...SONGS[language]].sort((a, b) => compareSongs(language, a, b));
}

function compareSongs(language, a, b) {
  if (language === "ja") {
    const aLatin = startsWithLatin(getSortText(a));
    const bLatin = startsWithLatin(getSortText(b));

    if (aLatin !== bLatin) {
      return aLatin ? -1 : 1;
    }

    return (aLatin ? SONG_SORTERS.en : SONG_SORTERS.ja).compare(getSortText(a), getSortText(b));
  }

  const sorter = SONG_SORTERS[language] || SONG_SORTERS.en;
  return sorter.compare(getSortText(a), getSortText(b));
}

function getSortText(song) {
  if (song.language === "zh") {
    return song.title?.zh || song.title?.original || "";
  }

  return song.title?.original || song.title?.zh || "";
}

function startsWithLatin(value) {
  return /^[a-z0-9]/i.test(String(value).trim());
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
      if (key !== "original" && !row[key]) {
        return;
      }

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
