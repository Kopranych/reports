const puppeteer = require('puppeteer');

(async () => {
  var pagePath = 'file://' + __dirname + '/resource/ips_report.html';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pagePath, {waitUntil: ['networkidle0', 'domcontentloaded']});
  await page.emulateMedia('print');
  await page.pdf({
    path: './pdf/test.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
      top: "40px",
      left: "20px",
      right: "20px",
      bottom: "40px"
    }
  });

  await browser.close();
})();

