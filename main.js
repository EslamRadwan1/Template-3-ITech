// // Sections Show Animation
const allSections = document.querySelectorAll("section");

const sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
        sectionsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
allSections.forEach((sec) => sectionsObserver.observe(sec));

// // Skills Progress Bar Animation
const ourSkillsSection = document.querySelector(".our-skills");
const progressSpans = document.querySelectorAll(".our-skills .progress span");

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressSpans.forEach(startProgress);
        progressObserver.unobserve(ourSkillsSection);
      }
    });
  },
  { threshold: 0.5 },
);
progressObserver.observe(ourSkillsSection);

function startProgress(el) {
  const goalWidth = el.dataset.width;
  el.style.width = goalWidth;
}
//// OLD WAY
// let progressStarted = false;

// window.addEventListener("scroll", function () {
//   if (
//     window.scrollY >= ourSkillsSection.offsetTop - window.innerHeight + 500 &&
//     !progressStarted
//   ) {
//     progressSpans.forEach(startProgress);
//     progressStarted = true;
//   }
// });

// // Events Countdown Timer
const days = document.querySelector(".events .days");
const hours = document.querySelector(".events .hours");
const minutes = document.querySelector(".events .minutes");
const seconds = document.querySelector(".events .seconds");
const countdownTime = new Date("Jan 01, 2027 17:00:00").getTime();

const counter = setInterval(() => {
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

// // Stats Count Animation
const statsSection = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats .number");

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statsNumbers.forEach(startCount);
        statsObserver.unobserve(statsSection);
      }
    });
  },
  { threshold: 0.5 },
);
statsObserver.observe(statsSection);

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
//// OLD WAY
// let countStarted = false;
// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY >= statsSection.offsetTop - window.innerHeight + 400 &&
//     !countStarted
//   ) {
//     statsNumbers.forEach(startCount);
//     countStarted = true;
//   }
// });

// // Scroll Progress
let height;
function updateHeight() {
  height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
}
updateHeight();
window.addEventListener("resize", updateHeight);

const progressBar = document.querySelector(".scroll-progress-bar");
const progressBtn = document.querySelector(".scroll-progress-btn");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  progressBar.style.width = `${(scrollTop / height) * 100}%`;
  progressBtn.style.background = `linear-gradient(to top, #2196f3 ${(scrollTop / height) * 100}%, #2195f33b 0%)`;
  if (scrollTop >= 600) {
    progressBtn.style.opacity = 1;
  } else {
    progressBtn.style.opacity = 0;
  }
});

progressBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});