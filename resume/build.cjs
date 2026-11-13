// Renders resume/resume.html to public/Kyle_Zeman_Resume.pdf.
// Usage: node resume/build.cjs   (needs Playwright with Chromium available)
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'resume.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, '..', 'public', 'Kyle_Zeman_Resume.pdf'),
    format: 'Letter',
    preferCSSPageSize: true,
    printBackground: true,
  });
  await browser.close();
})();
