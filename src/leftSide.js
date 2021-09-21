import buttons from "./buttonsTimer";

const timer = [`
<div>
    <div class="backgroundCircle">
        <div class="circle__content">
            <div class="circle__timer">
                <h2 class="timer">25:00<\h2>
            </div>
            <div class="place">
                <div class="place__button">
                    ${buttons[0]}
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
`];

export default timer