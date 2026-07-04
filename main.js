// Skills Progress Bar Animation
const ourSkillsSection = document.querySelector(".our-skills");
const progressSpans = document.querySelectorAll(".our-skills .progress span");
let progressStarted = false;

window.addEventListener("scroll", function () {
  if (
    window.scrollY >= ourSkillsSection.offsetTop - window.innerHeight + 500 &&
    !progressStarted
  ) {
    progressSpans.forEach(startProgress);
    progressStarted = true;
  }
});
function startProgress(el) {
  const goalWidth = el.dataset.width;
  el.style.width = goalWidth;
}

// Events Countdown Timer
const days = document.querySelector(".events .days");
const hours = document.querySelector(".events .hours");
const minutes = document.querySelector(".events .minutes");
const seconds = document.querySelector(".events .seconds");
const countdownTime = new Date("Jan 01, 2027 17:00:00").getTime();

const counter = setInterval(() => {
  console.log("print")
  const dateDiff = countdownTime - Date.now();

  if (dateDiff <= 0) {
    clearInterval(counter);

    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";

    return;
  }

  const theDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const theHours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const theMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const theSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  days.innerHTML = theDays < 10 ? `0${theDays}` : theDays;
  hours.innerHTML = theHours < 10 ? `0${theHours}` : theHours;
  minutes.innerHTML = theMinutes < 10 ? `0${theMinutes}` : theMinutes;
  seconds.innerHTML = theSeconds < 10 ? `0${theSeconds}` : theSeconds;
}, 1000);

// Stats Count Animation
const statsSection = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats .number");
let countStarted = false;

window.addEventListener("scroll", () => {
  if (
    window.scrollY >= statsSection.offsetTop - window.innerHeight + 400 &&
    !countStarted
  ) {
    statsNumbers.forEach(startCount);
    countStarted = true;
  }
});

function startCount(el) {
  const goal = Number(el.dataset.goal);
  const count = setInterval(() => {
    el.textContent = Number(el.textContent) + 1;

    if (Number(el.textContent) >= goal) {
      el.textContent = goal;
      clearInterval(count);
    }
  }, 2000 / goal);
}
