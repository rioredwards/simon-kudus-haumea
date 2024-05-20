// Create an array of skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

// Select the skills section by id
const skillsSection = document.getElementById("skills");

// Create a <ul> element inside the skills section if it doesn't already exist
let skillsList = skillsSection.querySelector("ul");
if (!skillsList) {
    skillsList = document.createElement("ul");
    skillsSection.appendChild(skillsList);
}

// For loop to iterate over the skills array
for (let i = 0; i < skills.length; i++) {
    // Create a new list item/element
    const skill = document.createElement("li");
    
    // Set the inner text to the skills array values
    skill.innerText = skills[i];
    
    // Append the skill element to the skillsList element
    skillsList.appendChild(skill);
}


// Function to create and append the footer
function createFooter() {
    // Create a new Date object to get the current year
    const today = new Date();
    const thisYear = today.getFullYear();
    const copyrightName = "Simon Kudus"

    // Check if the footer already exists, if not create it
    let footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    // Apply styles to the footer
    footer.style.backgroundColor = "#333";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";
    footer.style.fontFamily = "Roboto, sans-serif";
    footer.style.fontStyle = "italic";
    footer.style.padding = "10px 0";
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";

    // Create a new paragraph element for the copyright
    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy;${copyrightName} ${thisYear}`;

    // Append the paragraph to the footer
    footer.appendChild(copyright);
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", createFooter);






