const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder()
    .withCapabilities({'browserName': 'chrome', 'enableVNC': true })
    .usingServer('http://0.0.0.0:4444/wd/hub')	
    .build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.sleep(10000);
  } finally {
    await console.log(driver);
    await driver.quit();
  }
})();


const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder } = require('selenium-webdriver');

const geckoDriverPath = path.join(__dirname, "geckodriver"); // or wherever you've your geckodriver
const serviceBuilder = new ServiceBuilder(geckoDriverPath);
const SeleniumDriver = await new Builder()
  .forBrowser('chrome')
  .setFirefoxService(serviceBuilder)
  .build();
