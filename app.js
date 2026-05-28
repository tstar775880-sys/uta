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
  家族: "kazoku",
  姉: "ne-",
  皆: "mina",
  赤煉瓦: "akarenga",
  壁: "kabe",
  小: "chii",
  話: "hana",
  秘密: "himitsu",
  作戦: "sakusen",
  連: "tsure",
  三人: "sannin",
  目: "me",
  化物: "bakemono",
  告: "tsuge",
  色: "iro",
  主人公: "shujinkou",
  面白: "omoshiroi",
  悩: "nayan",
  巻: "maki",
  付: "tsuke",
  組織: "soshiki",
  茜色: "akaneiro",
  染: "some",
  始: "hajime",
  笑: "warae",
  陽: "hi",
  沈: "shizun",
  春風: "harukaze",
  理不尽: "rifujin",
  曲: "maga",
  陰謀: "inbou",
  膨: "fukuran",
  消: "kie",
  黒: "kuro",
  狂: "kurui",
  嫌: "iya",
  終: "owaru",
  考: "kangae",
  笑顔: "egao",
  救: "sukueru",
  不器用: "bukiyou",
  独: "hitori",
  暮: "kurase",
  明日: "ashita",
  不思議: "fushigi",
  眠: "nemu",
  授業: "jugyou",
  起: "oki",
  犬: "inu",
  放課後: "houkago",
  部活: "bukatsu",
  休: "yasumi",
  寝落: "neochi",
  電話: "denwa",
  勇気: "yuuki",
  振: "furi",
  意識: "ishiki",
  香水: "kousui",
  欲: "hoshi",
  明日: "ashita",
  上: "ue",
  結局: "kekkyoku",
  案外: "angai",
  勉強: "benkyou",
  映画: "eiga",
  観: "mi",
  友達: "tomodachi",
  載: "nori",
  俺: "ore",
  彼女: "kanojo",
  自慢: "jiman",
  告白: "kokuhaku",
  男: "otoko",
  相談: "soudan",
  布団: "futon",
  恋: "koi",
  甘: "amai",
  香: "kaori",
  空: "sora",
  飾: "kazaru",
  花: "hana",
  音: "oto",
  二人: "futari",
  並: "narabu",
  影: "kage",
  花火: "hanabi",
  昇: "nobotte",
  合図: "aizu",
  朝: "asa",
  姿: "sugata",
  逸: "sorashi",
  響: "hibi",
  抜: "nuke",
  着: "tsuki",
  場所: "basho",
  変: "kawa",
  焦: "kogare",
  景色: "keshiki",
  繋: "tsunaga",
  開: "hiraku",
  照: "terashi",
  重: "kasana",
  大丈夫: "daijoubu",
  伝: "tsutawaru",
  吹: "fuki",
  窓辺: "madobe",
  揺: "yurashi",
  浮: "uka",
  面影: "omokage",
  春: "haru",
  貪: "musabo",
  読: "yomi",
  本: "hon",
  夢中: "muchuu",
  栞: "shiori",
  挟: "hasan",
  奥底: "okusoko",
  熱: "netsu",
  描: "egai",
  乗: "nose",
  数: "kazoe",
  程: "hodo",
  喜怒哀楽: "kidoairaku",
  閉: "toji",
  瞼: "mabuta",
  時間: "jikan",
  怖: "kowaku",
  拾: "hirotte",
  縋: "sugatte",
  運命: "unmei",
  待: "machi",
  合: "awase",
  旅路: "tabiji",
  奇跡: "kiseki",
  躓: "tsumazui",
  間違: "machigatte",
  来: "kita",
  足跡: "ashiato",
  交: "kawashi",
  温: "nukumori",
  頼: "tayori",
  仰: "aogu",
  青: "ao",
  渚: "nagisa",
  砂: "suna",
  後: "ushiro",
  寄: "yori",
  返: "kaesu",
  波: "nami",
  足元: "ashimoto",
  攫: "sarau",
  夕凪: "yuunagi",
  日暮: "higure",
  過: "sugi",
  咲: "saita",
  曖昧: "aimai",
  解: "tokashite",
  何度: "nando",
  呼: "yobu",
  波間: "namima",
  選: "erabi",
  済: "sumu",
  飲: "nomeba",
  住: "sunde",
  伸: "nobaseba",
  静: "shizuka",
  将来: "shourai",
  希望: "kibou",
  年後: "nengo",
  月: "gatsu",
  最高: "saikou",
  瞬間: "shunkan",
  交差点: "kousaten",
  照: "tere",
  冒険: "bouken",
  基地: "kichi",
  夏休: "natsuyasumi",
  太陽: "taiyou",
  仲良: "nakayoku",
  喧嘩: "kenka",
  転校: "tenkou",
  手紙: "tegami",
  夕日: "yuuhi",
  眺: "nagame",
  頬: "hoho",
  白鳥: "hakuchou",
  見定: "misadame",
  行: "iki",
  地圖: "chizu",
  近道: "chikamichi",
  王道: "oudou",
  翼: "tsubasa",
  爪: "tsume",
  割: "ware",
  補修: "hoshuu",
  達成感: "tasseikan",
  他人: "hito",
  鷹: "taka",
  隠: "kakusu",
  想像: "souzou",
  一生懸命: "isshoukenmei",
  絶体絶命: "zettai zetsumei",
  発展: "hatten",
  途中: "tochuu",
  不意: "fui",
  外: "hazureru",
  映: "utsura",
  全力: "zenryoku",
  分: "bun",
  眠: "nemu",
  痩: "yase",
  調子: "choushi",
  喰: "kutta",
  敗北感: "haibokukan",
  目標: "mokuhyou",
  下方: "kahou",
  修正: "shuusei",
  柔軟: "juunan",
  臨機応変: "rinki ouhen",
  七変化: "shichihenge",
  孔雀: "kujaku",
  美: "bi",
  魅: "mise",
  五臓六腑: "gozou roppu",
  満身: "manshin",
  邁進: "maishin",
  願望: "ganbou",
  痩身: "soushin",
  麗人: "reijin",
  誘惑: "yuuwaku",
  多発: "tahatsu",
  砕: "kudake",
  赤点: "red point",
  全能感: "zennoukan",
  認: "mitome",
  許: "yurusa",
  悪: "warui",
  嫉妬: "shitto",
  服: "fuku",
  化粧: "keshou",
  決: "kimari",
  日傘: "higasa",
  持: "motte",
  可愛: "kawaii",
  生: "umare",
  努力: "doryoku",
  尊: "touto",
  女子力: "joushiryoku",
  高: "taka",
  貴女: "anata",
  干渉: "kanshou",
  類: "rui",
  友: "tomo",
  陰口: "kageguchi",
  厚底: "atsuzoko",
  前髪: "maegami",
  軽: "karui",
  時代: "jidai",
  目立: "medatte",
  磨: "migaki",
  虜: "toriko",
  趣味: "shumi",
  違: "chigai",
  者: "mono",
  味方: "mikata",
  一番: "ichiban",
  我慢: "gaman",
  人生: "jinsei",
  嗚呼: "aa",
  渋谷: "shibuya",
  虚: "munashi",
  纏: "matou",
  訪: "otozure",
  仕方: "shikata",
  慌: "awatadashi",
  悔: "kuyashi",
  踏: "fumi",
  進: "susumu",
  擦: "kosuru",
  何枚: "nanmai",
  自信: "jishin",
  何回: "nankai",
  武器: "buki",
  周: "mawari",
  比: "kurabe",
  初: "hajime",
  賭: "kake",
  透明: "toumei",
  無: "nai",
  響: "hibiki",
  覚醒: "mezame",
  譲: "yuzure",
  託: "takushi",
  捜: "sagashi",
  受: "uke",
  入: "ireru",
  手繰: "taguri",
  注: "sosogu",
  躰: "karada",
  解: "toki",
  放: "hanatsu",
  逸: "sorasa",
  迫: "semaru",
  憧: "akogare",
  呼: "yobi",
  守: "mamori",
  撃: "uchi",
  抜: "nuite",
  夜明: "yoake",
  造: "tsukuro",
  砕: "kudaku",
  始: "hajimari",
  裁: "sabaku",
  恐: "osore",
  渦: "uzu",
  溺: "oboreru",
  絆: "kizuna",
  大胆不敵: "daitan futeki",
  革命: "kakumei",
  反戦国家: "hansen kokka",
  日の丸: "hinomaru",
  二輪車: "nirinsha",
  悪霊退散: "akuryou taisan",
  環状線: "kanjousen",
  東奔西走: "touhonseisou",
  少年少女: "shounen shoujo",
  戦国無双: "sengoku musou",
  浮世: "ukiyo",
  随: "manimani",
  千本桜: "senbon zakura",
  紛: "magire",
  此処: "koko",
  宴: "utage",
  鋼: "hagane",
  檻: "ori",
  断頭台: "dantoudai",
  下: "oroshi",
  三千世界: "sanzen sekai",
  常世: "tokoyo",
  嘆: "nageku",
  唄: "uta",
  青藍: "seiran",
  彼方: "kanata",
  光線銃: "kousenjuu",
  百戦錬磨: "hyakusen renma",
  将校: "shoukou",
  花魁道中: "oiran douchuu",
  集: "atsumare",
  聖者: "seija",
  行進: "koushin",
  禅定門: "zenjoumon",
  潜: "kuguri",
  安楽浄土: "anraku joudo",
  厄払: "yakubarai",
  終幕: "saigo",
  大団円: "daidanen",
  拍手: "hakushu",
  希望: "kibou",
  丘: "oka",
  閃光弾: "senkoudan",
  飛: "tobi",
  踊: "odoru",
  撃: "uchi",
  眼: "me",
  覚: "samashi",
  遅: "osoi",
  身体: "karada",
  追: "oi",
  越: "koshi",
  髪: "kami",
  昔: "mukashi",
  前前前世: "zenzenzense",
  探: "sagashi",
  方: "kata",
  宇宙: "uchuu",
  億: "oku",
  光年: "kounen",
  物語: "monogatari",
  語: "katari",
  銀河: "ginga",
  何個: "nanko",
  握: "nigitta",
  騒: "sawagashi",
  前夜: "zenya",
  旗: "hata",
  諦: "akirame",
  奪: "ubai",
  困難: "konnan",
  返: "kaeri",
  討: "uchi",
  以外: "igai",
  口: "kuchi",
  祝福: "shukufuku",
  浮: "ukabu",
  選: "erabu",
  何処: "doko",
  共: "tomo",
  生: "iki",
  記憶: "kioku",
  連: "tsure",
  願: "negai",
  煌: "kirameku",
  孤独: "kodoku",
  祈: "inori",
  決: "kesshite",
  秘: "himeta",
  刃: "yaiba",
  鎖: "kusari",
  断: "tachi",
  切: "kiru",
  闘: "tatakau",
  運命: "unmei",
  壊: "kowashi",
  操: "ayatsuri",
  人形: "ningyou",
  乗: "nori",
  泣: "naki",
  虫: "mushi",
  強: "tsuyoku",
  人生: "jinsei",
  答: "kotae",
  呪縛: "jubaku",
  解: "toite",
  定: "sadame",
  追: "oi",
  地面: "jimen",
  蹴: "keri",
  舞: "mau",
  呪: "noroi",
  変: "kaete",
  掴: "tsukameru",
  沢山: "takusan",
  目一杯: "meippai",
  紅蓮華: "gurenge",
  理由: "riyuu",
  泥: "doro",
  走馬灯: "soumatou",
  酔: "you",
  震: "furue",
  匂: "nioi",
  睨: "nirande",
  自身: "jishin",
  悲: "kanashi",
  負: "make",
  意味: "imi",
  紅蓮: "guren",
  華: "hana",
  誇: "hokore",
  照: "terashi",
  イナビカリ: "inabikari",
  雑音: "zatsuon",
  耳: "mimi",
  刺: "sasu",
  戸惑: "tomadou",
  優: "yasashii",
  守: "mamore",
  水面下: "suimenka",
  絡: "karamaru",
  善悪: "zenaku",
  透: "suke",
  偽善: "gizen",
  天罰: "tenbatsu",
  逸材: "itsuzai",
  挑: "idomi",
  一輪: "ichirin",
  美: "utsukushii",
  乱暴: "ranbou",
  敷: "shiki",
  詰: "tsume",
  トゲ: "toge",
  本気: "honki",
  現: "araware",
  簡単: "kantan",
  片付: "katazuke",
  心臓: "shinzou",
  根: "ne",
  血: "chi",
  宿: "yadotte",
  人知: "hito shire",
  儚: "hakanai",
  散: "chiri",
  結末: "ketsumatsu",
  無情: "mujou",
  破: "yabure",
  悲鳴: "himei",
  吹: "fuku",
  ハルジオン: "harujion",
  物憂: "monou",
  眺: "nagame",
  画面: "gamen",
  映: "utsutta",
  笑: "waratte",
  呑: "nomi",
  頷: "unazuki",
  置: "oki",
  去: "zari",
  指: "yubi",
  隙間: "sukima",
  抜: "nuke",
  戻: "modore",
  欠片: "kakera",
  気配: "kehai",
  伸: "nobashi",
  境界線: "kyoukaisen",
  引: "hiita",
  現実: "genjitsu",
  向: "mukou",
  鮮烈: "senretsu",
  花達: "hanatachi",
  内: "uchi",
  擦: "suri",
  減: "hera",
  扉: "tobira",
  鍵: "kagi",
  無: "nai",
  残: "nokosa",
  奥: "oku",
  染: "shimita",
  帰: "kaeru",
  閉: "toji",
  鮮: "aza",
  蘇: "yomigaeru",
  蕾: "tsubomi",
  込: "kome",
  失: "naku",
  繋: "tsunai",
  続: "tsuduki",
  歩: "aruite",
  振: "fureba",
  確: "tashika",
  動: "ugoki",
  アイドル: "aidoru",
  無敵: "muteki",
  荒: "arasu",
  メディア: "media",
  秘密: "himitsu",
  ミステリアス: "misuteriasu",
  抜: "nuke",
  彼女: "kanojo",
  エリア: "eria",
  完璧: "kanpeki",
  嘘: "uso",
  天才的: "tensaiteki",
  様: "sama",
  食: "tabeta",
  遊: "asobi",
  内緒: "naisho",
  聞: "kikarete",
  淡: "tantan",
  燦: "sansan",
  蜜: "mitsu",
  味: "aji",
  タイプ: "taipu",
  相手: "aite",
  得: "e",
  堕: "ochiru",
  奪: "ubaware",
  究極: "kyuukyoku",
  金輪際: "konrinzai",
  一番星: "ichibanboshi",
  虜: "toriko",
  完全: "kanzen",
  特別: "tokubetsu",
  我々: "wareware",
  役: "yaku",
  お陰: "okage",
  洒落臭: "sharakusai",
  妬: "netami",
  嫉妬: "shitto",
  許: "yurusenai",
  認: "mitomenai",
  崇: "agameteru",
  最強: "saikyou",
  弱点: "jakuten",
  見当: "miatara",
  唯一無二: "yuiitsumuni",
  本物: "honmono",
  得意: "tokui",
  沸: "wakasu",
  積: "tsumu",
  キャリア: "kyaria",
  汗: "ase",
  綺麗: "kirei",
  アクア: "akua",
  ルビー: "rubii",
  瞼: "mabuta",
  歌: "utai",
  マリア: "maria",
  絶対: "zettai",
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
  if (song.sortTitle) {
    return song.sortTitle;
  }

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
