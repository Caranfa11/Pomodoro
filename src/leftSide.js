import buttons from "./buttonsTimer";
import clock from "./remainingTime"

var timer = `
<div>
    <div class="backgroundCircle">
        <div class="circle__content">
            <div class="circle__timer">
                <spam class="timer" id="clock">00:00<\spam>
            </div>
            <div class="place">
                <div class="place__button">
                    ${clock.buttons}
                </div>
            </div>
        </div>
    </div>
    <div class="pomodoros">
        <div class="pomodoros__check">
            <div class="pomodoros__check--on">
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoros__check--on">
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoros__check--on">
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoros__check--off">
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoros__check--off">
            </div>
        </div>
    </div>
</div>
`;

clock.changeDOM;

export default timer