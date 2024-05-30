const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let text_color_sec = document.querySelector(".text-color-sec").children;


let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
    text_color_sec[0].value = "";

  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You! </strong>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
    `;
});

function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}