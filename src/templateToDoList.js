import img_tomato from "./assets/tomate.png"
import img_timer from "./assets/reloj-contorno-circular.png"

const info = [`
<div class="toDo">
    <div class="toDo__bar">
        <h2>
            To Do List:
        </h2>
        <button>
            <h2>+</h2>
        </button>
    </div> 
    <div class="task">
        <div class="over">
            <div class="task__card">
                <h2>
                    Title:
                </h2>
                <h3>
                    Description:
                </h3>
            </div>
        </div>
    </div>
</div>
    `,`
<div class="box">
    <div class="box__info">
        <div class="box__info--title">
            <div class="icon">
                <img src="${img_tomato}" alt="tomato" title="Happy Tomato" width="50px">
            </div>
            <div class="title">
                <h2>Pomodoro Technique</h2>
            </div>
            <div class="icon">
            <img src="${img_timer}" alt="timer" title="Timer" width="45px">
            </div>
        </div>
        <div class="box__info--text">
            <p>
                The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.
            </p>
        </div>
    </div>
    <div class="steps__title">
        <h2>Steps</h2>
    </div>
    <div class="box__steps">
        <div class="step" id="step_1">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        1
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Get a to-do list and a timer.
                </p>
            </div>
        </div>
        <div class="step" id="step_2">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        2
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Set your timer for 25 minutes and focus 
                </p>
            </div>
        </div>
        <div class="step" id="step_3">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        3
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    When your session ends, mark off one pomodoro
                </p>
            </div>
        </div>
        <div class="step" id="step_4">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        4
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Then enjoy a five-minute break.
                </p>
            </div>
        </div>
    </div>
</div>
`]

export default info;