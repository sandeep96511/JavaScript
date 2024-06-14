const toggleSwitch = document.querySelector(".switch input");

toggleSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  const nav = document.querySelector("nav");
  const formContainer = document.querySelector(".login-container");
  const signUpButton = document.getElementById("signUpButton");
  const animatedButton = document.getElementById("animated-button");
  const inputFields = document.querySelectorAll("input");

  if (document.body.classList.contains("dark")) {
    // Dark mode
    nav.style.backgroundColor = "#191b1d";
    nav.style.border = "2px solid white";
    nav.querySelector("h2").style.color = "white";
    formContainer.style.backgroundColor = "#191b1d";
    formContainer.style.border = "2px solid white";
    formContainer.style.color = "white";
    signUpButton.style.backgroundColor = "#4F2EE8";
    signUpButton.style.color = "#fff";
    animatedButton.style.backgroundColor = "white";
    animatedButton.style.color = "black";
    document.body.style.backgroundColor = "#5132E8";

    // Set input field styles for dark mode
    inputFields.forEach((input) => {
      input.style.backgroundColor = "transparent";
      input.style.border = "2px solid white";
      input.style.color = "white";
    });
  } else {
    // Light mode
    nav.style.backgroundColor = "white";
    nav.style.border = "1px solid black";
    nav.querySelector("h2").style.color = "black";
    formContainer.style.backgroundColor = "#fff";
    formContainer.style.color = "black";
    signUpButton.style.backgroundColor = "#4F2EE8";
    signUpButton.style.color = "#fff";
    animatedButton.style.backgroundColor = "#000000";
    animatedButton.style.color = "white";

    // Reset input field styles for light mode
    inputFields.forEach((input) => {
      input.style.backgroundColor = "transparent";
      input.style.border = "2px solid #ccc";
      input.style.color = "black";
    });
  }
});
