import style from "./style.css";
import cardsOrInfo from "./templateToDoList.js"
import button from "./rightSide.js"
import timerChecks from "./leftSide.js"

const arr =[1,2,3],
codeESNext = () => console.log(...arr);

console.log("Hello World without Webpack");

codeESNext();

document.getElementById("app").innerHTML=`
<div id="left-view">
    ${timerChecks[0]}
</div>
<div id="right-view">
    ${button[1]}
    ${cardsOrInfo[1]}
</div>`;