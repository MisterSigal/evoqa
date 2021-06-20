import { driver } from './App.js'
import { By } from 'selenium-webdriver'
import { By, Key, until } from 'selenium-webdriver'

(async function example() {
  try {
    await driver.startLocalBrowser()
    await driver.webdriver.get('http://www.google.com/ncr');
    await driver.webdriver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.webdriver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.webdriver.sleep(10000);
  } 

  catch(e) { console.log(e) }
  
  finally {
    await console.log(driver);
    await driver.webdriver.quit()
  }

})();