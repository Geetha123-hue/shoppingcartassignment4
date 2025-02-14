// const products = [
//     { id: 1, name: "Smartphone", price: 699 },
//     { id: 2, name: "Laptop", price: 1299 },
//     { id: 3, name: "Headphones", price: 199 }
// ];

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("products");
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
});
