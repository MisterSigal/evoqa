const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver').path;

//Page Object imports
const login = require('./pageobject/login');
const user_tn = require('./pageobject/users/users');
const mainPage = require('./pageobject/mainpage');

const localHost = 'http://0.0.0.0:8091/';
const remoteHost = 'http://0.0.0.0:4444/wd/hub';

class Main {
  constructor(driver){
    this.driver = driver;
  }
}


const remoteChrome = new Builder()
  .withCapabilities({'browserName': 'chrome', 'enableVNC': true })
  .usingServer(remoteHost);

 const localChrome = new Builder()
   .withCapabilities(new chrome.ServiceBuilder(__dirname + '/../drivers/chromedriver'))
   .forBrowser('chrome');


async function testCase() {
  const t = await new Main(localChrome, localHost);
  const b = await t.driver.build();
  await console.log('in test case');
  await b.get(localHost);
  await b.wait(until.elementLocated(By.id(login.username)));
  await b.findElement(By.id(login.username)).sendKeys(user_tn.name);
  await b.findElement(By.id(login.password)).sendKeys(user_tn.password);
  await b.findElement(By.className(login.loginButton)).click();
  await b.wait(until.elementLocated(By.className(mainPage.createIssue)));
  await b.findElement(By.className(mainPage.createIssue)).click();
  await b.findElement(By.className('sc-jAaTju PykSP ant-select ant-select-enabled ant-select-allow-clear')).click();
  await console.log('test case end');
}
testCase();


