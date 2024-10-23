// Arrow function to change text content
const changeText = () => {
    // DOM manipulation: Selecting elements by ID
    const heading = document.getElementById("heading");
    const description = document.getElementById("description");

    // Updating the content using arrow function
    heading.textContent = "DOM Manipulation with JavaScript";
    description.textContent = "This paragraph text has been changed using an arrow function.";
};

// Arrow function to apply CSS style changes
const changeStyle = () => {
    // DOM manipulation: Selecting the div by ID
    const contentDiv = document.getElementById("content");

    // CSS manipulation: Adding a new class
    contentDiv.classList.toggle("highlight");
};

// DOM manipulation: Adding event listeners to buttons
document.getElementById("changeTextBtn").addEventListener("click", changeText);
document.getElementById("changeStyleBtn").addEventListener("click", changeStyle);
