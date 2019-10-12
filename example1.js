const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://0.0.0.0:4444/wd/hub')	
    .build();

driver.get('https://google.com');
