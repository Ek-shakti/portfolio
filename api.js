fetch('https://dummyjson.com/products')
    .then(Response => Response.json())
    .then(characters => {
        // renderProducts(characters.products)
        console.log(characters)

    });
const cardContainer = document.querySelector('#div')
function renderProducts(products) {
    products.forEach(product => {

        const div = document.createElement('div')
        const image = document.createElement('img')
        const price = document.createElement('h3')

        div.classList = 'card'
        image.classList = 'card-img'
        price.classList = 'card-price'

        price.textContent = `price: ${products.price}`

        let c = image.setAttribute("src", products.images)

        div.appendChild(image)
        div.appendChild(price)
        cardContainer.appendChild(div)

    });

}

