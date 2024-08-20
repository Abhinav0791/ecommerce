// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, img: 'https://via.placeholder.com/150' }
];

let cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

// Function to update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Initialize the page
renderProducts();
