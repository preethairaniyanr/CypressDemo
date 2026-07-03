
require('dotenv').config();

const nodemailer = require("nodemailer");
const fs = require("fs");

const logs = JSON.parse(
  fs.readFileSync(
    'cypress/reports/logs.json',
    'utf8'
  )
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log(fs.existsSync("./cypress/reports/logs.json"));
console.log(fs.existsSync("./cypress/videos/spec.cy.js.mp4"));

const totalTests = logs.length;
const passedTests = logs.filter((log) => log.status === "PASS").length;

const failedTests = logs.filter((log) => log.status === "FAIL").length;

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: "preethar0601@gmail.com",
  subject: "Cypress Testing Report",
  text: "Attached Cypress execution report",
  html: `
<h2>Cypress Execution Summary</h2>

<table border="1">
<tr>
  <th>Total Tests</th>
  <th>Passed</th>
  <th>Failed</th>
</tr>

<tr>
  <td>${totalTests}</td>
  <td>${passedTests}</td>
  <td>${failedTests}</td>
</tr>
</table>

<p>Excel report and execution video attached.</p>
`,
  attachments: [
    {
      filename: "mochawesome.html",
      path: "./cypress/final-report/mochawesome.html",
    },
    {
      filename: "CypressExecutionReport.xlsx",
      path: "./CypressExecutionReport.xlsx",
    },
    {
      filename: "ExecutionVideo.mp4",
      path: "./cypress/videos/spec.cy.js.mp4",
    },
  ],
});

// hqpl atlt dvsd oskd
