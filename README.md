Установка и настройка Webpack. Базовая конфигурация проекта
[Сайт webpack](https://webpack.js.org/)

```code
npm init -y
npm install webpack webpack-cli --save-dev
```

> `webpack.config.js`

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(\_\_dirname, "build"),
  },
};
```

> `package.json`

```json
"scripts": { "dev": "webpack"},
```

---

## [Установка плагинов](https://webpack.js.org/plugins/)

---

### [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) - Easily create HTML files to serve your bundles

> `webpack.config.js`

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
...
plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
```

---

### [Clean plugin for webpack](https://github.com/johnagan/clean-webpack-plugin) - plugin to remove/clean your build folder(s).

```code
npm install --save-dev clean-webpack-plugin
```

> `webpack.config.js`

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
...
plugins: [new CleanWebpackPlugin()],
```

---

### [Babel Loader](https://github.com/babel/babel-loader)

```code
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

> В `webpack.config.js` подключить правило в модуль

---

## CSS `["style-loader", "css-loader"]`

### [Style Loader](https://github.com/webpack-contrib/style-loader)

```code
npm install --save-dev style-loader
```

> В `webpack.config.js` подключить правило в модуль

---

### [CSS-loader](https://github.com/webpack-contrib/css-loader)

```code
npm install --save-dev css-loader
```

> В `webpack.config.js` подключить (не надо дублировать Style Loader)

---

## Images

### [File-loader](https://www.npmjs.com/package/file-loader) resolves import/require() on a file into a url and emits the file into the output directory.

```code
npm install file-loader --save-dev
```

> В `webpack.config.js` подключить правило в модуль

> В `index.js` -> `import jsImg from "../assets/javascript.png";`

---

## [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server)

[Настройка Webpack Dev Server](https://webpack.js.org/configuration/dev-server/#root)

```code
npm install webpack-dev-server --save-dev
```

> `webpack.config.js`

```js
devServer: {
  contentBase: path.join(__dirname, "build"),
  // compress: true,
  port: 8080,
  open: true,
},
```

> `package.json`

```json
"scripts": { "start": "webpack serve"},
```
