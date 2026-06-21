const fs = require("fs");

const data = JSON.parse(fs.readFileSync("contador.json", "utf-8"));

if (data.days > 0) {
  data.days -= 1;

  fs.writeFileSync("contador.json", JSON.stringify(data, null, 2));

  const readme = `# Countdown

${data.days} days
`;

  fs.writeFileSync("README.md", readme);
}