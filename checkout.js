let cart = JSON.parse(localStorage.getItem('cart'));
let total = JSON.parse(localStorage.getItem("total")) || 0;

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price}`
      cartItems.appendChild(listItem);
      total += item.price;
    });
  
    const subtotal = document.getElementById("subtotal");
    subtotal.textContent = `Subtotal: $${total}`;
  
    const tax = document.getElementById("tax");
    const taxRate = 0.07;
    const actualTax = total * taxRate;
    tax.textContent = `Tax: $${actualTax.toFixed(2)}`;
  
    const priceTotal = document.getElementById("total");
    const actualTotal = total + actualTax;
    priceTotal.textContent = `Total: $${actualTotal.toFixed(2)}`;
  }

displayCart();

// Select payment option

let paymentForm = document.getElementById("paymentForm");
const ccForm = document.getElementById("ccForm");
// console.log(ccForm);

// function getPayment() {
//   let a = document.getElementById("paymentForm");
//   for (let i = 0; i < a.length; i++) {
//     let option = a.options[i];
//     if (option.value === "credit") {
//       document.body.append(ccForm);
//     }
//   }
// }