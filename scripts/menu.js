const menuItems = [
    {
        category: "Cones",
        name: "Vanilla Ice Cream Cone",
        price: "$3.50"
    },
    {
        category: "Cones",
        name: "Chocolate Ice Cream Cone",
        price: "$3.50"
    },
    {
        category: "Cones",
        name: "Strawberry Ice Cream Cone",
        price: "$3.50"
    },
];

function generateMenuItemHTML(item) {
    console.log('initiated!')
    return `
        <div class="subcategory-item">
            <p>${item.name}</p>
            <p>${item.price}</p>
        </div>
    `;
}


// Function to populate the menu items for a given category
const populateMenuItems = (category, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear the container

    // Filter menu items based on the category
    const items = menuItems.filter(function (item) {
        return item.category === category;
    });

    // Generate HTML for each menu item and append to the container
    items.forEach(function (item) {
        const itemHTML = generateMenuItemHTML(item);
        container.insertAdjacentHTML("beforeend", itemHTML);
    });
}

// Populate the menu items for each category
populateMenuItems("Cones", "cones-container");
populateMenuItems("Sundaes", "sundaes-container");
populateMenuItems("Boba", "boba-container");
populateMenuItems("Specials", "specials-container");