let cart = JSON.parse(localStorage.getItem('cart'));

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


function calculateChange() {
    const cashAmountElement = document.getElementById("cashAmount");
    const cashAmount = parseFloat(cashAmountElement.value);

    const change = cashAmount - actualTotal;

    const changeAmountElement = document.getElementById("changeAmount");
    const changeDisplay = document.createElement("div");

    if (cashAmount >= actualTotal) {
        changeDisplay.textContent = `Change: $${change.toFixed(2)}`;
    } else {
        changeDisplay.textContent = "Insufficient funds.";
    }

    changeAmountElement.innerHTML = "";
    changeAmountElement.appendChild(changeDisplay);
}

const calculateChangeButton = document.getElementById("calculateChange");
calculateChangeButton.addEventListener("click", calculateChange);

let paymentForm = document.getElementById("paymentForm");
const ccForm = document.getElementById("ccForm");

function handleCashPayment() {
    document.getElementById("paymentPlaceholder").style.display = "none";
    document.getElementById("ccForm").style.display = "none";
    document.getElementById("cashForm").style.display = "block";
}

function handleCreditCardPayment() {
    document.getElementById("paymentPlaceholder").style.display = "none";
    document.getElementById("cashForm").style.display = "none";
    document.getElementById("ccForm").style.display = "block";
}

const cashButton = document.getElementById("cashButton");
const creditButton = document.getElementById("creditButton");

cashButton.addEventListener("click", handleCashPayment);
creditButton.addEventListener("click", handleCreditCardPayment);

const completeCheckout = document.getElementById("completeCheckout");

completeCheckout.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("tax", JSON.stringify(actualTax));
    localStorage.setItem("actualTotal", JSON.stringify(actualTotal));
    const paymentMethod = document.getElementById("cashForm").style.display === "block" ? "cash" : "card";
    const cashAmount = document.getElementById("cashAmount").value;
    const changeAmount = document.getElementById("changeAmount").textContent;
    localStorage.setItem("paymentMethod", paymentMethod);
    localStorage.setItem("cashAmount", cashAmount);
    localStorage.setItem("changeAmount", changeAmount);
    window.location.href = "receipt.html";
  });
