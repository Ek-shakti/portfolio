
// const timer = new Date("30").getTime;

// setInterval(() => {

//     let now = new Date().getTime;
//     let stop = timer.getTime() - now.getTime()

//     // var minutes = Math.floor((stop % (1000 * 60 * 60)) / (1000 * 60));
//     // var seconds = Math.floor((stop % (1000 * 60)) / 1000);

//     if (stop < 0) {
//         clearInterval()
//         const t = document.querySelector("#timer").textContent = stop
//     }

// }, 1000);


// let timeleft = "30"
// setInterval(() => {
//     // (`Time left -${timeleft}`);
//     timeleft--;
//     if (timeleft < 0) {
//         clearInterval()
//         const t = document.querySelector("#timer").textContent = timeleft
//     }

// }, 1000);


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
