let intervalId = null;
let timeLeft = 0;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  const container = document.querySelector(".centre");

  timeLeft = Number(alarmInput.value);

  if (timeLeft <= 0) return;

  clearInterval(intervalId);
  container.classList.remove("blinking");

  timeRemaining.textContent = `Time Remaining: ${formatTime(timeLeft)}`;

  intervalId = setInterval(() => {
     timeLeft--;

    timeRemaining.textContent = `Time Remaining: ${formatTime(timeLeft)}`;

    if (timeLeft === 0) {
      clearInterval(intervalId);
      playAlarm();
      container.classList.add("blinking");
      }
  }, 1000);
} 

function stopAlarm() {
  clearInterval(intervalId);
  timeLeft = 0;
  const timeRemaining = document.getElementById("timeRemaining");
  const container = document.querySelector(".centre");

  timeRemaining.textContent = "";
  container.classList.remove("blinking");
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
