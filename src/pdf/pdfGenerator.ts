const puppeteer = require('puppeteer');
// const pagePath = 'file://' + __dirname + '/resource/ips_report.html';

export const printPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto(pagePath, {waitUntil: ['networkidle0', 'domcontentloaded']});
  await page.setContent( `<body>
 <h1>An example static HTML to PDF</h1>
 </body>`);
  await page.emulateMedia('print');
  const pdf = await page.pdf({
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
  return pdf;
};
