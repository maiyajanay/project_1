const products = [
    {
      category: "Coffee",
      name: "Pour Over",
      description: "A method of brewing coffee where hot water is poured over coffee grounds in a filter.",
      price: 3.50
    },
    {
      category: "Coffee",
      name: "Latte",
      description: "Espresso combined with steamed milk and topped with a small amount of foam.",
      price: 4.00
    },
    {
      category: "Coffee",
      name: "Americano",
      description: "A coffee drink made by diluting espresso with hot water.",
      price: 3.00
    },
    {
      category: "Coffee",
      name: "Cappuccino",
      description: "Espresso mixed with equal parts of steamed milk and milk foam.",
      price: 4.50
    },
    {
      category: "Coffee",
      name: "Red Eye",
      description: "A coffee drink made by combining brewed coffee with a shot of espresso.",
      price: 4.25
    },
    {
      category: "Tea",
      name: "Black Tea",
      description: "A type of tea made from the leaves of the Camellia sinensis plant, typically steeped in hot water.",
      price: 2.50
    },
    {
      category: "Tea",
      name: "Chai Tea Latte",
      description: "A spiced tea concentrate mixed with steamed milk, often sweetened.",
      price: 4.75
    },
    {
      category: "Tea",
      name: "Green Tea",
      description: "A type of tea made from the leaves of the Camellia sinensis plant, known for its fresh taste and green color.",
      price: 3.00
    },
    {
      category: "Snacks",
      name: "Breakfast Sandwich",
      description: "A sandwich typically consisting of eggs, cheese, and bacon or sausage served on bread or a croissant.",
      price: 5.50
    },
    {
      category: "Snacks",
      name: "Croissant",
      description: "A buttery, flaky pastry made with layers of dough and butter.",
      price: 3.00
    },
    {
      category: "Snacks",
      name: "Cookie",
      description: "A sweet baked treat often made with ingredients like flour, sugar, and chocolate chips.",
      price: 2.00
    }
  ];


  function displayMenu() {
    const menu = document.getElementById("product-menu");
  
    products.forEach(product => {
      const item = document.createElement("div");
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${products.indexOf(product)})">Add to Cart</button>
      `;
      menu.appendChild(item);
    });
  }
  
  displayMenu();