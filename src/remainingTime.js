import timer from "./leftSide";
import buttons from "./buttonsTimer";

var timeChange = 1;
var changeButtons = 0;
const deadline = 0;
const time = [25 * 60000, 0.10 * 60000]  //Time Value * 60000 = Time in  Miliseconds
// time = [ Work Time , Break ]
var timeResume;

const timeRemain = (t) => {
    let remainingTime = Math.floor((t + 1000)/ 1000), 
        remainingSeconds = ("0" + Math.floor(remainingTime % 60)).slice(-2),
        remainingMinutes = ("0" + Math.floor(remainingTime / 60 % 60)).slice(-2);

    return {
        remainingTime,
        remainingMinutes,
        remainingSeconds
    }
};

const countdownTime = function(t,timeArr){
    var time = timeRemain(t-1000);
    //Change Id="Clock"
    document.getElementById("clock").innerHTML = `${time.remainingMinutes}:${time.remainingSeconds}`;
    //Change Working and Break Time
    if(time.remainingTime === deadline){
        if(timeChange === 0){
            timeChange++;
        }else{
            timeChange--;
        }
        t = timeArr[timeChange];
    }
    //Countdown in case that remainTime is not 0 (zero)
    else{
        timeResume = t;
        t -= 1000;
    }
    return t;
};


const changeDOM = (timeAvailable) => {
    let t = timeAvailable[timeChange];
    const countdownRemain = setInterval(() => {
        t = countdownTime(t,time);
        document.getElementById("pause").onclick = () => {
            clearInterval(countdownRemain);
            changeButtons === 0 ? changeButtons++ : changeButtons--;
            buttons = buttons[1];
        };
        document.getElementById("play").onclick = () => {
            t = countdownTime(t,time); //queda manual
        };
    }, 1000);
};

//function(Id, Time to Work and Break);
changeDOM(time);


export default {changeDOM, buttons};