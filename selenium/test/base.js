const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const fs = require('fs');
class Main {
    constructor(driver) {
        this.driver = driver;
    }
    startLocalBrowser(browserName) {
        return this.driver = new Builder().forBrowser(browserName).build()
    }
    startRemoteBrowser(seleniumServer, browserName) {
        return this.driver = new Builder().withCapabilities({
            'browserName': browserName,
            'enableVNC': true
        }).usingServer(seleniumServer).build()
    }
    get(url) {
        return this.driver.get(url)
    }
    waitFor(selector, element, timeout) {
        return this.driver.wait(until.elementLocated(selector(element)), timeout);
    }
    findElement(selector, element) {
        return this.driver.findElement(selector(element));
    }
    screenShot(path, title) {
        return this.driver.takeScreenshot().then(function(data) {
            var base64Data = data.replace(/^data:image\/png;base64,/, "") fs.writeFile(__dirname + path + title + ".png", base64Data, 'base64', function(err) {
                if (err) console.log(err);
            });
        });
    }
    sleep(ms) {
        return this.driver.sleep(ms);
    }
    script(script) {
        return this.driver.executeScript(script);
    }
    quit() {
        return this.driver.quit();
    }
}
module.exports = {
    Main,
    By,
    Key,
    until
}
