import style from "./style.css";
import logo from "./assets/violento.png";

const arr =[1,2,3],
codeESNext = () => console.log(...arr);

console.log("Hello World without Webpack");

codeESNext();
document.getElementById("app").innerHTML=`<img src="${logo}" alt="Chiguire">`;