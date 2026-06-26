const fs = require("fs");

const targetDate = new Date("2026-11-19T12:00:00-05:00");
const now = new Date();

let diff = targetDate - now;

if (diff < 0) diff = 0;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
const minutes = Math.floor(diff / (1000 * 60)) % 60;

const contador = {
  target: targetDate.toISOString(),
  days,
  hours,
  minutes,
};

fs.writeFileSync("contador.json", JSON.stringify(contador, null, 2));

const readme = `# Countdown

## ⌛ ${days} days ${hours} hours ${minutes} minutes
`;

fs.writeFileSync("README.md", readme);
