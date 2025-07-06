

setInterval(() => {

    const now = new Date()
    let hours1 = now.getHours()
    let hours = hours1 % 12
    let min = now.getMinutes()
    let sec = now.getSeconds()

    let time = `${hours}:${min}:${sec}`
    const t = document.querySelector("#time").textContent = time



    let day = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()






    let date = `${day}-${month}-${year}`
    const d = document.querySelector("#date").textContent = date

}, 1000);



