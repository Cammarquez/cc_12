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

// Appends the new metric card to the dashboard container
dashboardById.appendChild(revenueCard);
