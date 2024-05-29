var toggled = false; 

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
var toggle = document.getElementById("toggle-container");
const orbit = document.querySelector('.orbit');


const stars = 100;
const skyStars = document.getElementById("sky__stars");
const toggleAnimation = document.getElementById("toggle-animation");

// Generate stars randomly using absolute position
function createStars() {
	for (let i = 0; i < stars; i++) {
		let x = Math.floor(Math.random() * 100 + 1);
		let y = Math.floor(Math.random() * 100 + 1);
		const starPoint = document.createElement("div");
		starPoint.style.left = `${x}%`;
		starPoint.style.top = `${y}%`;
		skyStars.appendChild(starPoint);
	}
    orbit.innerHTML = '<div class="moon"></div>';
}

toggle.addEventListener('click', function () {
    if(!toggled) {
        createStars() ;
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        orbit.innerHTML = '<div class="sun"></div>';
        // skyStars.removeChild();
        
        skyStars.innerHTML = '';

        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
    
});