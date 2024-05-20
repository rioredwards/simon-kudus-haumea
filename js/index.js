document.addEventListener("DOMContentLoaded", function() {
    createFooter();
    populateSkills();
});

function populateSkills() {
    // Create an array of skills
    const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

    // Select the skills section by id and ensure the ul element exists
    const skillsSection = document.getElementById("skills");
    let skillsList = skillsSection.querySelector("ul");
    if (!skillsList) {
        skillsList = document.createElement("ul");
        skillsSection.appendChild(skillsList);
    }

    // Iterate over the skills array and create list items
    skills.forEach(skillText => {
        const skill = document.createElement("li");
        skill.innerText = skillText;
        skillsList.appendChild(skill);
    });
}

function createFooter() {
    const today = new Date();
    const thisYear = today.getFullYear();
    const copyrightName = "Simon Kudus";

    let footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    // Apply styles to the footer
    Object.assign(footer.style, {
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
        fontStyle: "italic",
        padding: "10px 0",
        position: "fixed",
        bottom: "0",
        width: "100%"
    });

    // Create a new paragraph element for the copyright
    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; ${copyrightName} ${thisYear}`;

    // Append the paragraph to the footer
    footer.appendChild(copyright);
}

// Add event listener to the message form
const messageForm = document.querySelector("form[name='leave_message']");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve the values from the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log the values to the console
    console.log(`Name: ${usersName}, Email: ${usersEmail}, Message: ${usersMessage}`);

    // Select the #messages section and its ul element
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    // Create a new list item for the message
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>: ${usersMessage}</span>`;

    // Create a remove button for the message
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        }
    });

    // Append the remove button to the new message
    newMessage.appendChild(removeButton);

    // Append the new message to the message list
    messageList.appendChild(newMessage);

    // Clear the form after submission
    messageForm.reset();

    // Display the #messages section if it's hidden
    messageSection.style.display = "block";
});

// Hide the #messages section by default
document.addEventListener("DOMContentLoaded", function() {
    const messageSection = document.getElementById("messages");
    if (messageSection.querySelector("ul").children.length === 0) {
        messageSection.style.display = "none";
    }
});







