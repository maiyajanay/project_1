let cart = JSON.parse(localStorage.getItem('cart'));

let total = JSON.parse(localStorage.getItem("total")) || 0;

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const subtotal = document.getElementById("subtotal");
  const tax = document.getElementById("tax");
  const priceTotal = document.getElementById("total");

  cartItems.innerHTML = "";
  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  const taxRate = 0.07;
  const actualTax = total * taxRate;
  subtotal.textContent = `Subtotal: $${total.toFixed(2)}`;
  tax.textContent = `Tax: $${actualTax.toFixed(2)}`;
  priceTotal.textContent = `Total: $${(total + actualTax).toFixed(2)}`;
}

displayCart();