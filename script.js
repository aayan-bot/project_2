const products = [
  {
    id: 1,
    title: "Remote Control Toy Car",
    price: 999,
    category: "Toys",
    rating: 4,
    image: "https://via.placeholder.com/300x180?text=Toy+Car"
  },
  {
    id: 2,
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    category: "Electronics",
    rating: 5,
    image: "https://via.placeholder.com/300x180?text=Headphones"
  },
  {
    id: 3,
    title: "Children's Story Book",
    price: 349,
    category: "Books",
    rating: 3,
    image: "https://via.placeholder.com/300x180?text=Story+Book"
  },
  {
    id: 4,
    title: "Smart LED Bulb",
    price: 799,
    category: "Electronics",
    rating: 4,
    image: "https://via.placeholder.com/300x180?text=Smart+Bulb"
  }
];

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const ratingFilter = document.getElementById("ratingFilter");

function displayProducts(filtered) {
  productList.innerHTML = "";
  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-title">${product.title}</div>
      <div class="product-price">₹${product.price}</div>
      <div class="product-rating">⭐ ${product.rating}</div>
    `;

    productList.appendChild(card);
  });
}

function filterProducts() {
  const searchTerm = searchBar.value.toLowerCase();
  const category = categoryFilter.value;
  const min = parseFloat(minPrice.value) || 0;
  const max = parseFloat(maxPrice.value) || Infinity;
  const rating = parseInt(ratingFilter.value) || 0;

  const filtered = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm) &&
      (category === "" || product.category === category) &&
      product.price >= min &&
      product.price <= max &&
      product.rating >= rating
    );
  });

  displayProducts(filtered);
}

searchBar.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
minPrice.addEventListener("input", filterProducts);
maxPrice.addEventListener("input", filterProducts);
ratingFilter.addEventListener("change", filterProducts);

window.addEventListener("load", () => displayProducts(products));
