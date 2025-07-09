
let arr = ["img1.jpg", "img2.jpg", "img3.jpg"];

let index = 0

let slider_slide = document.querySelector('#slider')
let check = slider_slide.setAttribute("src", arr[index])

let nextBtn = document.querySelector('#next').addEventListener('click', () => {
    index++;
    if (index >= arr.length) {
        index = 0
    }
    document.querySelector('#slider').src = arr[index]

})
let prevBtn = document.querySelector('#prev').addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    document.querySelector('#slider').src = arr[index]

})
