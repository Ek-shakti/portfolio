function fetchClothes() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const list = document.getElementById("productList");
            list.innerHTML = ""; // clear previous list

            // Filter only clothing products
            const clothes = products.filter(item => item.category.includes("clothing"));

            clothes.forEach(item => {
                const li = document.createElement("li");
                li.className = "bg-white p-4 rounded shadow flex items-center gap-4";

                // Image
                const img = document.createElement("img");
                img.src = item.image;
                img.width = 60;
                img.height = 60;
                img.className = "object-contain";

                // Text
                const textWrapper = document.createElement("div");
                const title = document.createElement("h3");
                title.textContent = item.title;
                title.className = "font-semibold text-sm";

                const price = document.createElement("p");
                price.textContent = `$${item.price}`;
                price.className = "text-xs text-gray-600";

                textWrapper.appendChild(title);
                textWrapper.appendChild(price);

                // Add to list
                li.appendChild(img);
                li.appendChild(textWrapper);
                list.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Error fetching clothes:", err);
        });
}
