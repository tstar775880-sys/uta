# Uta 歌詞整理

這是一個靜態前端頁面，用來依中文歌、英文歌、日文歌整理歌曲與逐句歌詞對照。

## 使用方式

直接用瀏覽器打開 `index.html` 即可，不需要啟動 web server，因此不會占用任何 port。

目前範例密文的預設密碼是：

```text
14741
```

目前網站會用密碼解密 `encrypted_songs.js`，不會把歌詞明文放在 GitHub Pages 上。

## 加密歌詞資料

1. 複製 `songs_source.example.js` 成 `songs_source.js`。
2. 在 `songs_source.js` 填入或修改歌詞。
3. 執行加密：

```bash
node tools/encrypt_songs.js 14741
```

4. GitHub 只提交 `encrypted_songs.js`，不要提交 `songs_source.js`。

`songs_source.js` 已經加到 `.gitignore`，避免不小心把明文歌詞提交上去。若要換密碼，改用新密碼重新執行加密即可。

## GitHub Pages

此專案已加入 `.github/workflows/pages.yml`。推送到 `main` 分支後，可以到 GitHub repository 的 Pages 設定，把來源改成 GitHub Actions，由 workflow 發佈網頁。

## 資料格式

明文歌曲資料格式請參考 `songs_source.example.js`，正式資料放在本機的 `songs_source.js`。

中文歌：

```js
{
  id: "song-id",
  language: "zh",
  title: { zh: "歌名" },
  artist: { zh: "歌手" },
  lyrics: [
    { zh: "中文歌詞" }
  ]
}
```

英文歌：

```js
{
  id: "song-id",
  language: "en",
  title: { original: "English Title", zh: "中文歌名" },
  artist: { original: "English Artist", zh: "中文歌手名" },
  lyrics: [
    { original: "English lyric", zh: "中文翻譯" }
  ]
}
```

日文歌：

```js
{
  id: "song-id",
  language: "ja",
  title: { original: "日文歌名", zh: "中文歌名" },
  artist: { original: "日文歌手名", zh: "中文歌手名" },
  lyrics: [
    {
      original: "日文歌詞",
      romaji: "羅馬拼音",
      zh: "中文翻譯",
      ruby: [
        { text: "今", reading: "ima" },
        { text: "ここ", reading: "koko" },
        { text: "で", reading: "de" }
      ]
    }
  ]
}
```

## 測試

測試檔案使用 `test_*.js` 命名。

```bash
node test_data.js
node test_encryption.js
```
