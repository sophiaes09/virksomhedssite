/****  Til Risteriet knap (fået hjælp fra chatgpt)   *****/
// JavaScript to handle the step transitions
// Burger menu funktionalitet
document.getElementById("burgerMenu").addEventListener("click", function () {
  const menu = document.getElementById("menuList");
  menu.classList.toggle("active");
});

/****  Til Risteriet knap (fungerer til step transitions)   *****/
// JavaScript til håndtering af step-transitions
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step-container");
  const nextStepButtons = document.querySelectorAll(".nextStepButton");
  let currentStepIndex = 0;

  // Funktion til at vise det nuværende step
  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
  }

  // Tilføj event listeners til alle knapper
  nextStepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Flyt til næste step, eller start forfra
      currentStepIndex = (currentStepIndex + 1) % steps.length;
      showStep(currentStepIndex);
    });
  });

  // Vis det første step, når siden loader
  showStep(currentStepIndex);
});
