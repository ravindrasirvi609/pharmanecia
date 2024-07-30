import puppeteer from "puppeteer";

export async function getBrowser() {
  return puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
  });
}
