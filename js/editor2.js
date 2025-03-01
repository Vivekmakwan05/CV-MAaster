let currentSection = "";

function editSectionSecond(section) {
    currentSection = section; // Store the section being edited
    const text = document.getElementById(section).innerText;
    
    document.getElementById("editor-input-Second").value = text;
    document.getElementById("editor-modal").classList.remove("hidden"); // Show modal
}

function saveSectionSecond() {
    const updatedText = document.getElementById("editor-input-Second").value;
    
    document.getElementById(currentSection).innerText = updatedText;
    document.getElementById("editor-modal").classList.add("hidden"); // Hide modal
    
    localStorage.setItem(currentSection, updatedText); // Save to localStorage
}

// Load saved data on page refresh
window.onload = function () {
    ["Skill-Section", "Achievement-Section", "Education-Section", "Experiance-Section", "Project-Section"].forEach((section) => {
        if (localStorage.getItem(section)) {
            document.getElementById(section).innerText = localStorage.getItem(section);
        }
    });
};