import {browser, element, ExpectedConditions, protractor} from 'protractor'
import {expect} from 'chai'
import { config } from '../../../protractor.conf'


export const setDefaultTimeoutNumber: number = config.params.timeOut


export class HP{

     /** 
     * Waits for a given element to be visible
     *  Wait for presence of locator (does not imply visible)
     * @param byEl
    */
   public async waitForEl(byEl: any) {

    await browser.wait(ExpectedConditions.presenceOf(element(byEl)), setDefaultTimeoutNumber, 'Element taking too long to appear in the DOM and element is:  ' + byEl);
}


     /** 
     * @param expectedTitle 'we need to pass the browser expected title'
    */
    public  async verifyPageTitle(expectedTitle: any) {
        await browser.sleep(4000)
        // let title = await browser.getTitle()
        // console.log(title);
        

        expect(await browser.getTitle()).to.equal(expectedTitle);
        try {
            expect(await browser.getTitle()).to.equal(expectedTitle);
        } catch (e) {
            var title = await browser.getTitle();
            throw new Error(e + title);
        }
    }

    /**
     * @param element 
     */
    public  async clear(byE1){
        await element(byE1).clear();

    }
    /***
     * @param element
     * @param text
     */
    public  async sendKeys(byE1: any, text: string){
        await element(byE1).sendKeys(text);
        // await byE1.sendKeys(protractor.Key.ENTER);

    }

      /**
     * @returns getTextElement
     * @param byEl 
     */
    public  async getText(byEl: any) {
        try {
            await this.waitForEl(byEl)
            let getTextElement = await element(byEl).getText()
            return getTextElement
        } catch (e) {
            throw new Error(e);
        }
    }

     /**
     * @param byEl 'Element Locator'
     * Example:
     *      element_locator = by.xpath("xpathValue")
     *      e2e_utils.click(element_locator)
    */
   public async click(byEl: any) {
    try {
        await this.waitForEl(byEl);
        await element(byEl).click();
    } catch (e) {
        throw new Error(`"unable to click element:" ${byEl}` + e);
    }
}


     /**
     * 
     * @param byEl 
     * @param expectedText 
     */
    public async isTextContains(byEl: any, expectedText: string) {
        await this.waitForEl(byEl);
        let getTextElement = await element(byEl).getText()
        try {
            expect(getTextElement).to.include(expectedText);
        } catch (e) {
            throw new Error(e);
        }
    }





}