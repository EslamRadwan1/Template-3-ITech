const stateSection = document.querySelector(".stats");
const statesNumbers = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = function () {
  //   if (window.scrollY >= stateSection.offsetTop) {
  if (
    window.scrollY >=
    stateSection.offsetTop - stateSection.scrollHeight / 2
  ) {
    if (!started) {
      statesNumbers.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
