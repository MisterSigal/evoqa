import { driver } from '../App.js'
import { By, Key } from 'selenium-webdriver'
import { EXAMPLE_PAGE } from './locators.js'

export const ExamplePage = {
    driver,
    locators = EXAMPLE_PAGE,
    

    async login(args) {
        try{
            await driver.startLocalBrowser()
            await driver.webdriver.get(this.locators.url)
            await driver.waitFor(By.css, this.locators.search_field.css)
            await driver.sleep(args.sleep)
        }
        catch(e){ console.log(e) }        
    },

    async searhFor(text){
        try{
            await driver.findElement(By.css, this.locators.search_field.css).sendKeys(text)
            await driver.findElement(By.css, this.locators.search_field.css).sendKeys(Key.ENTER)
        } 
        catch(e){ console.log(e) }  
    }
}