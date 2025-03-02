//Initial Commit

// Task 1
const dashboardById = document.getElementById('dashboard');// Selects the dashboard container using both getElementById and querySelector
const dashboardByQuery = document.querySelector('#dashboard');

const revenueCard = document.createElement('div');// Creates a new <div> element to represent the metric card

revenueCard.setAttribute('class', 'metric-card');// Assigns a class and id to the new element
revenueCard.setAttribute('id', 'revenueCard');

revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`;// Populates the card with a title and a placeholder value

const profitCard = document.createElement('div');// Creates a new <div> element to represent the metric card

profitCard.setAttribute('class', 'metric-card');// Assigns a class and id to the new element
profitCard.setAttribute('id', 'profitCard');

profitCard.innerHTML = `
    <h3>Profit</h3>
    <p>$0</p>
`;// Populates the card with a title and a placeholder value

const expensesCard = document.createElement('div');// Creates a new <div> element to represent the metric card

expensesCard.setAttribute('class', 'metric-card');// Assigns a class and id to the new element
expensesCard.setAttribute('id', 'expensesCard');

expensesCard.innerHTML = `
    <h3>Expenses</h3>
    <p>$0</p>
`;// Populates the card with a title and a placeholder value

// Appends the new metric card to the dashboard container
dashboardById.appendChild(revenueCard);
dashboardById.appendChild(profitCard);
dashboardById.appendChild(expensesCard);

// Task 2
const metricCards = document.querySelectorAll('.metric-card'); // Selects all elements with the class "metric-card"
const metricCardsArray = Array.from(metricCards); // Converts the NodeList to an array

metricCardsArray.forEach(card => {
    card.innerHTML += ' - Updated'; // Appends " - Updated" to the current text
    card.style.backgroundColor = 'lightblue'; // Changes the background color
});

// Task 3
function addProductItem(productName) { // Create a function to add a new product item
    const inventoryList = document.getElementById('inventoryList'); // Selects the inventory list
    const productItem = document.createElement('li'); // Creates a new <li> element to represent the product item
    
    productItem.setAttribute('class', 'product-item'); // Assigns a class to the new product item
    productItem.textContent = productName; // Sets the text content of the product item
    
    productItem.addEventListener('click', function() { // Adds an event listener to the product item
        inventoryList.removeChild(productItem); // Removes the product item when clicked
    });
    
    inventoryList.appendChild(productItem); // Appends the new product item to the inventory list when the function is called
}

// Adds new product items
addProductItem('Laptop');
addProductItem('Smart Phone');
addProductItem('Laptop');

// Task 4
const customerSection = document.createElement('div'); // Creates the parent container
customerSection.setAttribute('id', 'customerSection'); // Assigns an id to the parent container

function createCustomerCard(customerName) {// Function to create a customer card
    const customerCard = document.createElement('div'); // Creates a new <div> element to represent the customer card
    customerCard.setAttribute('class', 'customer-card'); // Assigns a class to the customer card
    customerCard.textContent = customerName; // Sets the text content of the customer card

    customerCard.addEventListener('click', function(event) { // Adds a click event listener to the customer card
        console.log('Customer card clicked'); // Logs a message when the customer card is clicked
        event.stopPropagation(); // Stops the event from bubbling up to the parent container
    });

    return customerCard; // Returns the created customer card
}

customerSection.appendChild(createCustomerCard('Customer 1'));// Adds customer cards to the customer section
customerSection.appendChild(createCustomerCard('Customer 2'));
customerSection.appendChild(createCustomerCard('Customer 3'));

customerSection.addEventListener('click', function() {// Adds a click event listener to the parent container
    console.log('Customer section clicked'); // Logs a message when the parent container is clicked
});

document.body.appendChild(customerSection);// Appends the customer section to the body or another container