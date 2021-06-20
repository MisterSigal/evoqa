import { driver } from '../App.js'
import { By } from 'selenium-webdriver'
import { EXAMPLE_PAGE } from './locators.js'

export const ExamplePage = {
    driver,
    locators = EXAMPLE_PAGE,

    async login(args?) {
        try{
            await driver.startLocalBrowser()
            await driver.webdriver.get(this.locators.url)
            await driver.waitFor(By.css, this.locators.search_field.css)
            await driver.sleep(args.sleep?)
        }
        catch(e){ console.log(e) }        
    }
}