import style from "./style.css";
import cardsOrInfo from "./templateToDoList.js"
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
    ${button[1]}
    ${cardsOrInfo[1]}
</div>`;

/* Hay que cambiar el toDo de esta seccion, porque para colocar la informacion del pomodoro tiene que estar
unicamente el boton cambiado.

alli hay que colocar el toDo a como de lugar en el archivo de rightside.js

y colocar dentro de ese otro html para cuando sea la informacion, recuerda tambien agregar al diseño
el modo oscuro, exitos Caranfa y a seguir codeando con esfuerzo y dedicacion*/