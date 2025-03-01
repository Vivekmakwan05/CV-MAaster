let currentSection = "";

function editSectionSecond(event,sectionSecond) {
    event.preventDefault();
    currentSection = sectionSecond;
    const text = document.getElementById(sectionSecond).innerText;
    
    document.getElementById("editor-input-Second").value = text;
    document.getElementById("editor-modal2").style.display = "block"; 
}

function saveSectionSecond(event) {
    event.preventDefault();
    const updatedText = document.getElementById("editor-input-Second").value;
    
    document.getElementById(currentSection).innerText = updatedText;
    document.getElementById("editor-modal2").style.display = "block"; 
    
    localStorage.setItem(currentSection, updatedText); 
}

function editSection(event, section) {
    event.preventDefault();
    currentSection = section;
    
    document.querySelectorAll(`#${section} [data-field]`).forEach(field => {
        const fieldName = field.getAttribute("data-field");
        const fieldValue = field.innerText.trim();
        const inputField = document.querySelector(`.editor-input[data-field="${fieldName}"]`);
        if (inputField) {
            inputField.value = fieldValue;
        }
    });
    
    document.getElementById("editor-modal").style.display = "block";
}

function saveSection(event) {
    event.preventDefault();
    document.querySelectorAll(`#${currentSection} [data-field]`).forEach(field => {
        const fieldName = field.getAttribute("data-field");
        const inputField = document.querySelector(`.editor-input[data-field="${fieldName}"]`);
        if (inputField) {
            field.innerText = inputField.value;
            localStorage.setItem(`${currentSection}-${fieldName}`, inputField.value);
        }
    });
    
    document.getElementById("editor-modal").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-field]").forEach(field => {
        const fieldName = field.getAttribute("data-field");
        const savedValue = localStorage.getItem(`${field.closest('div').id}-${fieldName}`);
        if (savedValue) {
            field.innerText = savedValue;
        }
    });
});

