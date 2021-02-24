import {Given, When, Then} from 'cucumber'
import {HP} from '../src/pages/hp_page'
import {HpLocators} from '../src/locators/hpLoc'
import { browser } from 'protractor';


let homePage = new HP();

let hpLoc = new HpLocators();


Given('Open the google page',{timeout: 2 * 5000}, async() => {
    await homePage.verifyPageTitle(hpLoc.title);
    
});

When('search for ducks', {timeout: 2 * 5000}, async() => {

    await homePage.sendKeys(hpLoc.searchBox, hpLoc.text);
    await homePage.click(hpLoc.searchBtn);
	
});

Then('verify the results', async() => {
	await homePage.isTextContains(hpLoc.wikiLoc, hpLoc.ducks);
});


