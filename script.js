const targetDate = new Date('2026-11-19T12:00:00-05:00');

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById('timer').innerHTML = `
      <div style="text-align:center;">
        <h2 style="
          font-size:60px;
          color:white;
          font-weight:900;
          text-shadow:0 0 30px #ff2ea6;
        ">
          🚀 NOW AVAILABLE
        </h2>

        <p style="
          margin-top:15px;
          font-size:20px;
          opacity:.9;
        ">
          GTA VI has officially launched.
        </p>
      </div>
    `;
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
