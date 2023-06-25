function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("show");
}

const menuItems = [
    {
        category: "Cones",
        name: "Vanilla Ice Cream",
        price: "$3.50"
    },
    {
        category: "Cones",
        name: "Chocolate Ice Cream",
        price: "$3.50"
    },
    {
        category: "Cones",
        name: "Strawberry Ice Cream",
        price: "$3.50"
    },
    {
        category: "Sundaes",
        name: "Hot Fudge Sundae",
        price: "$7.75"
    },
    {
        category: "Sundaes",
        name: "Banana Split",
        price: "$7.75"
    },
    {
        category: "Boba",
        name: "Matcha Milk Tea",
        price: "$4.50"
    },
    {
        category: "Boba",
        name: "Taro Milk Tea",
        price: "$4.50"
    },
    {
        category: "Boba",
        name: "Strawberry Smoothie with Boba",
        price: "$5.00"
    },
    {
        category: "Specials",
        name: "Rainbow Delight",
        price: "$8.50"
    },
    {
        category: "Specials",
        name: "Caramel Crunch Sundae",
        price: "$8.00"
    }
];


// helper function
function generateMenuItemHTML(item) {
    return `
        <div class="subcategory-item">
            <p>${item.name}</p>
            <p>${item.price}</p>
        </div>
    `;
};

// Function to populate the menu items for a given category
const populateMenuItems = (category, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear the container

    const items = menuItems.filter((item) => item.category === category);

    // Generate HTML for each menu item and append to the container
    items.forEach((item) => {
        const itemHTML = generateMenuItemHTML(item);
        container.insertAdjacentHTML("beforeend", itemHTML);
    });
};

// Populate the menu items for each category
populateMenuItems("Cones", "cones-container");
populateMenuItems("Sundaes", "sundaes-container");
populateMenuItems("Boba", "boba-container");
populateMenuItems("Specials", "specials-container");