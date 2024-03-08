const products = [
    {
      category: "Coffee",
      name: "Pour Over",
      description: "Hot water poured over freshly ground coffee",
      price: 4.00
    },
    {
      category: "Coffee",
      name: "Latte",
      description: "Espresso with steamed milk",
      price: 5.00
    },
    {
      category: "Coffee",
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: 5.00
    },
    {
      category: "Coffee",
      name: "Americano",
      description: "Espresso with hot water.",
      price: 4.00
    },
    {
      category: "Coffee",
      name: "Red Eye",
      description: "Espresso and brewed coffee",
      price: 4.50
    },
    {
      category: "Tea",
      name: "Black Tea",
      description: "Earl Grey or English Breakfast",
      price: 3.00
    },
    {
      category: "Tea",
      name: "Green Tea",
      description: "Jasmine or Matcha",
      price: 3.00
    },
    {
      category: "Tea",
      name: "Chai Tea Latte",
      description: "Spiced chai with steamed milk",
      price: 5.00
    },
    {
      category: "Snacks",
      name: "Breakfast Sandwich",
      description: "Bacon, egg, & cheese served on a bun or croissant",
      price: 10.00
    },
    {
      category: "Snacks",
      name: "Croissant",
      description: "A buttery, flaky pastry",
      price: 4.00
    },
    {
      category: "Snacks",
      name: "Cookie",
      description: "Chocolate Chip",
      price: 3.00
    }
  ];


  function displayMenu() {
    const menu = document.getElementById("product-menu");
  
    products.forEach(product => {
      const item = document.createElement("div");
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${products.indexOf(product)})" id="addToCart">Add to Cart</button>
      `;
      menu.appendChild(item);
    });
  }
  
  displayMenu();

  let addToCart = [];

  const allDivs = document.querySelectorAll('div');
  
  for(let div of allDivs) {
    div.addEventListener('click', () => {
      addToCart.push(product.price);
      console.log(selectedPrices);
    })
  }