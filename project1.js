//Create an empty div with some id, using js add a paragraph with some text into the div.



const div = document.querySelector('#div')
const para = document.createElement('p')
para.textContent = "This paragraph is made using javaScript.!! "
div.appendChild(para)
document.body.append(div)

