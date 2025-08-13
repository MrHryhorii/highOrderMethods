const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];


/* Extra render functions */
const output = document.getElementById("output");

// function for double log
const log = (message) => {
    console.log(message);

    const container = document.createElement("div");

    // pretty-print if it's an object/array
    if (typeof message === "object") {
        const pre = document.createElement("pre");
        pre.textContent = JSON.stringify(message, null, 2);
        container.appendChild(pre);
    } else {
        const p = document.createElement("p");
        p.textContent = message;
        container.appendChild(p);
    }

    output.appendChild(container);
};

// create "hr" tag in output div
const separator = () => {
    output.appendChild(document.createElement("hr"));
};

/* Tasks */
/*
    1.Find all products in the "electronics" category that cost less than 200 – 
        these should receive an extra discount to be sold out quickly.
    2.Make a list of the names of all the products - 
        so Alva can print an advertising sheet for sales.
    3.Find the names of all products in the "clothing" category – 
        clothing always sells well, and Alva will market these specifically.
    4.Check if there are products that cost more than 1000 – 
        the expensive products may be a little difficult to sell, and Alva is considering providing special offers on them.
    5.Rain out how much the entire warehouse is worth before sales start - 
        So Alva knows how much she can earn.
*/

/* Task - 1 */
log("Task - 1");
const less200 = products.filter(item => item.price < 200 && item.category == "electronics");
log("Electronics that cost less than 200");
log(less200);
separator();