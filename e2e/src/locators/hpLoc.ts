import { by } from "protractor";

export class HpLocators{
    // locators

    // 
    searchBox: any = by.name('q');

    // 
    searchBtn: any = by.xpath("//span[normalize-space()='ducks']");
    searchBtn1: any = by.xpath("//div[@class='FPdoLc tfB0Bf']//input[@name='btnK']");

    //
    wikiLoc: any = by.xpath("//span[normalize-space()='Duck - Wikipedia']");




    // Test Data

    text: string = 'ducks'
    ducks: string = "Duck - Wikipedia";

    title: string = "Google";

}