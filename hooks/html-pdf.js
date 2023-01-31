// import puppeteer from 'puppeteer-core';
// import * as fs from 'fs/promises';

// export const downloadPDF = async () => {
//   // * Instancia de puppeteer
//   const browser = await puppeteer.launch();

//   // * Nueva página
//   const page = await browser.newPage();
//   const html = fs.readFileSync('./hi.txt');

//   await page.goto(html, { waitUntil: "domcontentloaded" });
//   await page.emulateMediaType("screen");
//   const pdf = await page.pdf({
//     path: "result.pdf",
//     margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
//     printBackground: true,
//     format: "A4",
//   });

//   // * Cierra la instancia del navegafor
//   await browser.close();
// }
