import timer from "./leftSide";
import buttons from "./buttonsTimer";


let timeChange = 1;
const deadline = 0;
let state = true;
const timeArr = [25 * 60 * 1000, 5 * 60 * 1000];  //Time Value * 60000 = Time in  Miliseconds
// time = [ Work Time , Break ]
let timeResume;

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

function countdownStart(t){
    let time = timeRemain(t-1000);
    //Change Id="Clock"
    document.getElementById("clock").innerHTML = `${time.remainingMinutes}:${time.remainingSeconds}`;
    //Change Working and Break Time
    if(time.remainingTime === deadline){
        t = timeArr[workOrBreak()];
    }
    //Countdown in case that remainTime is not 0 (zero)
    else{
        t -= 1000;
    }
    return t;
};

function workOrBreak(){
    if(timeChange === 0){
        timeChange++;
    }else{
        timeChange--;
    }
    return timeChange;
}

function pauseTime(interval){ // Pause the actual interval pass in parameter 
    clearInterval(interval);
};


const changeDOM = (time) => {
    const act = setInterval( () =>{
        if(state===true){ // Timer Working
            time = countdownStart(time); // Start the Countdown every time the function is called
            document.getElementById("pause").onclick = () => { // In Case of Click on Pause Button
                state = !state; // Change the State of Timer
            }
        }
        else
        { // Timer Paused
            document.getElementById("play").onclick = () => { // In Case of Click on Play Button
                pauseTime(act) // Pause the Countdown
                timeResume = time; // Save the Remain Time
                changeDOM(timeResume); //Call the function to run the time remaining
                state = !state; // Change the State of Timer
            }
        };

        document.getElementById("reset").onclick = () => { // In Case of Click on Reset Button
            pauseTime(act); // Timer Paused
            time = timeArr[timeChange]; // Take the max time posible to reset
            
            // Ternary Operator |-| Condition ? in case "Condition is True" : in case "Condition is False" |-|
            state===true ? changeDOM(time)// In case that state is true, automatically run
            : time = countdownStart(time); // In other case, only reset the time
        }
    },1000)
};

//function(Id, Time to Work and Break);
changeDOM(timeArr[1]);


export default {changeDOM, buttons};