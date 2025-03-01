const formSteps = document.querySelectorAll(".F-Step");
const nextBtns = document.querySelectorAll(".N-Button");
const prevBtns = document.querySelectorAll(".P-Button");
const steps = document.querySelectorAll(".step");

let currentStep = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentStep++;
        updateFormSteps();
        updateProgressBar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentStep--;
        updateFormSteps();
        updateProgressBar();
    });
});

function updateFormSteps() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}

function updateProgressBar() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index <= currentStep);
    });
}
