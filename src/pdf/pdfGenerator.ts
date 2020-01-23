const puppeteer = require('puppeteer');

export const printPdf = async (html: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.emulateMedia('print');
  const pdf = await page.pdf({
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
