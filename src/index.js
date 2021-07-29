import "../index.css";
import jsImg from "../assets/javascript.png";

console.log("hello rollup");

const jsImageHTML = document.createElement("img");
jsImageHTML.className = "js-image";
jsImageHTML.setAttribute("alt", "javascript");
jsImageHTML.setAttribute("src", jsImg);

document.body.append(jsImageHTML);
