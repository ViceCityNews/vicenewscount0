const targetDate = new Date("2026-11-19T12:00:00-05:00");

const timer = document.getElementById("timer");

const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

const pad = value => String(value).padStart(2, "0");

function updateCountdown() {

    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {

        timer.innerHTML = `
            <div class="launch">
                <h2>🚀 NOW AVAILABLE</h2>
                <p>GTA VI has officially launched.</p>
            </div>
        `;

        return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor(difference / 3600000) % 24;
    const minutes = Math.floor(difference / 60000) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    elements.days.textContent = days;
    elements.hours.textContent = pad(hours);
    elements.minutes.textContent = pad(minutes);
    elements.seconds.textContent = pad(seconds);

    setTimeout(updateCountdown, 1000 - (Date.now() % 1000));
}

updateCountdown();

<script async src="https://www.googletagmanager.com/gtag/js?id=G-J2VHEDGXZD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J2VHEDGXZD');
</script>
