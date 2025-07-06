//Use color select input and change complete background of page to that particular color  input. 



const box = document.querySelector('#select').addEventListener('click', () => {
    const input = document.getElementById('select').value

    document.body.style.backgroundColor = input

}
)