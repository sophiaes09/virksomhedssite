document.getElementById("burgerMenu").addEventListener("click", function () {
  const menu = document.getElementById("menuList");
  menu.classList.toggle("active");
});

/****  Til Risteriet knap (fået hjælp fra chatgpt)   *****/
// JavaScript to handle the step transitions
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step-container");
  const nextStepButton = document.getElementById("nextStepButton");
  let currentStepIndex = 0;

  // Function to show the current step
  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
  }

  // Add event listener to the button
  nextStepButton.addEventListener("click", () => {
    // Move to the next step, or loop back to the first step
    currentStepIndex = (currentStepIndex + 1) % steps.length;
    showStep(currentStepIndex);
  });

  // Show the first step on page load
  showStep(currentStepIndex);
});
