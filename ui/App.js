import { Builder, until } from 'selenium-webdriver'

class App {
    constructor() {
        this.webdriver
    }

    startLocalBrowser( browser = 'chrome' ) {
        return this.webdriver = new Builder().forBrowser(browser).build()
    }

    startRemoteBrowser(seleniumServer = 'http://bim-mon:4444/wd/hub', browserName = 'chrome'){
        return this.webdriver = new Builder()
        .withCapabilities({'browserName': browserName, 'enableVNC': true })
        .usingServer(seleniumServer)
        .build()
      } 

    waitFor(selector, element, timeout){
        return this.webdriver.wait(until.elementLocated(selector(element)), timeout);
    }
    
    findElement(selector, element){
        return this.webdriver.findElement(selector(element));
    }

    findElements(selector, element){
        return this.webdriver.findElements(selector(element));
    }

    click(selector, element){
        return this.webdriver.findElement(selector(element)).click();
    }

    sleep(ms) {
        return this.webdriver.sleep(ms)
    }

    async waitAndClick(selector, element, timeout) {
        await this.waitFor(selector, element, timeout)
        await this.webdriver.sleep(500)
        await this.click(selector, element)
    }
}

export const driver = new App()