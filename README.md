## Установка и настройка Rollup. Базовая конфигурация проекта

[Сайт Roolup](https://rollupjs.org/guide/en/)

[Roolup на npmjs](https://www.npmjs.com/package/rollup)

<img width="200" src="https://rollupjs.org/images/twitter-card.jpg"/>

---

### Порядок установки и настройки

```code
  npm init -y
  npm i rollup
```

> ### rollup.config.js

```js
export default {
  input: "./src/index.js", // основная точка входа (тут пишу код)
  output: {
    file: "./build/bundle.js", // собраный файл
    format: "cjs",
    // format: "iife", // какой формат хочу на выходе (их много)
  },
};
```

> Если ставил локально то запускать надо так -> `npx rollup --config`

Подключить `bundle.js` в `Index.html`

На данном этапе rollup не поддерживает стили и картинки и т.п. (нужны плагины)

---

## [Список плагинов для rollup](https://github.com/rollup/awesome)

---

### [Babel](https://github.com/rollup/plugins/tree/master/packages/babel) - для поддержки старыми браузерами

```code
npm install @rollup/plugin-babel --save-dev
```

---

### Поддержка CSS [rollup-plugin-styles](https://github.com/Anidetrix/rollup-plugin-styles)

```code
npm install -D rollup-plugin-styles
```

1. подключил в `rollup.config.js`
2. Создал css файл
3. В `index.js` -> `import "./index.css"`

---

### Поддержка картинок (на примере [rollup-plugin-img](https://www.npmjs.com/package/rollup-plugin-img))

```code
npm install -D rollup-plugin-img
```

1. Для удобства картинки в папку с проектом например в `./assets`
2. Подключил в `rollup.config.js`
3. В `index.js` -> `import jsImg from "../assets/javascript.png"`
4. `jsImageHTML.setAttribute("src", jsImg)`

---

### Локальный сервер для rollup [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve)

```code
npm install --save-dev rollup-plugin-serve
```

Подключил в `rollup.config.js`

---

### Автоматическая перезагрузка после сборки [rollup-plugin-livereload](https://github.com/thgh/rollup-plugin-livereload)

```code
npm install --save-dev rollup-plugin-livereload
```

> прописать скрипты в `package.json`

```json
  "scripts": {
    "dev": "npx rollup -c -w",
    "prod": "npx rollup -c"
  },
```
