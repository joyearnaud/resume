const argv = require('minimist')(process.argv.slice(1));
const directory = argv.directory;

const puppeteer = require("puppeteer");
const path = require("path");
const filePath = path.resolve(__dirname, directory + '/resume.html'); 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: directory + '/resume.pdf',
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: "0mm",
      left: "0mm",
      right: "0mm",
      bottom: "0mm"
    }
  });
   await browser.close();
})();