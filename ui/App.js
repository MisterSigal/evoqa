import { Builder, until } from 'selenium-webdriver'

class App {
    constructor() {
        this.webdriver
    }

    startLocalBrowser( browser = 'chrome' ) {
        return this.webdriver = new Builder().forBrowser(browser).build()
    }

    waitFor(selector, element, timeout){
        return this.webdriver.wait(until.elementLocated(selector(element)), timeout);
    }
    
    findElement(selector, element){
        return this.webdriver.findElement(selector(element));
    }
}

export var driver = new App()