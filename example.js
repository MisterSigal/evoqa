const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
	.withCapabilities({'browserName': 'chrome', 'enableVNC': true })
    .usingServer('http://0.0.0.0:4444/wd/hub')	
    .build();

driver.get('https://google.com');
console.log(driver);
driver.quit();
