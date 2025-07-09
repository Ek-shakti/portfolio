const arr = ["Wth4U", " y7aXc", " PLq9b", " Mg7Cb"]
let random = arr[Math.floor(Math.random() * 4)]
document.querySelector('#captcha').textContent = random
console.log(random);



const e = document.querySelector('#sub').addEventListener('click', () => {

    const cap = document.querySelector('#capValue').value
    console.log(cap);
    const ipPassword = document.getElementById('p').value
    const ipPassword2 = document.getElementById('cp').value

    if (cap == random && ipPassword == ipPassword2) {
        document.body.textContent = "you have loggedin!"

    }
    else {
        document.body.textContent = "oops password unmatched, try again!"

    }

})


const ipEmail = document.getElementById('email')
const ipNumber = document.getElementById('number')
const pass = document.getElementById('p')
const pass2 = document.getElementById('p')
const capt = document.getElementById('capValue')
const btn = document.getElementById('sub')


function check() {
    if (ipEmail.value && ipNumber.value && pass.value && pass2.value && capt.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }

}
ipEmail.addEventListener('input', check)
ipNumber.addEventListener('input', check)
pass.addEventListener('input', check)
pass2.addEventListener('input', check)
capt.addEventListener('input', check)

