import style from "./style.css";
import cardsOrInfo from "./templateToDoList.js"
import button from "./rightSide.js"
import timer from "./leftSide.js"

document.getElementById("app").innerHTML=`
    <div id="left-view">
        ${timer}
    </div>
    <div id="right-view">
        ${button[1]}
        ${cardsOrInfo[1]}
    </div>
`;