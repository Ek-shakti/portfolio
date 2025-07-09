
let timeLeft = 30;
const timer = setInterval(() => {
    const time = (`Time left -  00:${timeLeft}`);
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        const time2 = "Time's up!!"
        const t2 = document.querySelector("#timer2").textContent = time2
    }
    const t = document.querySelector("#timer").textContent = time

}, 1000); 
