const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriverPath = require('chromedriver').path;

(async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromedriverPath)
    .build();
  try {
    await console.log(chromedriverPath, driver.setChromeOptions)
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.sleep(10000);
  } finally {
    await console.log(driver);
    await driver.quit();
  }
})();

