const puppeteer = require("puppeteer");
const path = require("path");
const filePath = path.resolve(__dirname, './docs/index.html'); 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`);
  await page.pdf({
    path: "out/resume.pdf",
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: "10mm",
      left: "10mm",
      right: "10mm",
      bottom: "10mm"
    }
  });
   await browser.close();
})();