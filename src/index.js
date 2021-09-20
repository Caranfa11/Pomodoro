import style from "./style.css";
import cards from "./templateToDoList.js"
import button from "./rightSide.js"

const arr =[1,2,3],
codeESNext = () => console.log(...arr);

console.log("Hello World without Webpack");

codeESNext();

document.getElementById("app").innerHTML=`
<div id="left-view">
    <div class="circle">
        <div class="timer">
            <h2>25:00<\h2>
        </div>
    </div>
</div>
<div id="right-view">
    ${button[0]}
    <div class="toDo">
        <div class="toDo__bar">
            <h2>
                To Do List:
            </h2>
            <button>
                <h2>+</h2>
            </button>
        </div> 
        ${cards}
    </div>
</div>`;