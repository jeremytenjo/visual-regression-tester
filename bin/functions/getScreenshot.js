const puppeteer = require('puppeteer')

module.exports = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://www.nytimes.com/section/politics')
  await page.screenshot({ path: 'images/nytimes-politics.png', fullPage: true })
  await browser.close()
}
