const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");



function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerHTML = h + "<br><span>Hours</span>";
  minuteEl.innerHTML= m + "<br><span>Minutes</span>";
  secondEl.innerHTML = s + "<br><span>Seconds</span>";
  ampmEl.innerText = ampm;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h*30}deg)`;
  min_dot.style.transform = `rotate(${m*6}deg)`;
  sec_dot.style.transform = `rotate(${s*6}deg)`;


  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
