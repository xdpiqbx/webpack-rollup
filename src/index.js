import "../index.css";
import imageRollup from "../assets/rollup-card.jpg";

console.log("Hello World!");

const $image = document.createElement("img");
$image.src = imageRollup;
$image.className = "rollup-image";
document.body.append($image);
