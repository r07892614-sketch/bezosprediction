// 60-second looping timer
const countEl = document.getElementById("count");
let time = 60;

setInterval(() => {
  time--;
  if (time <= 0) {
    time = 60;
    const btn = document.getElementById("joinBtn");
    btn.animate(
      [
        { opacity: 0.7, transform: "scale(0.95)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      { duration: 500, easing: "ease-in-out" }
    );
  }
  countEl.textContent = time;
}, 1000);
