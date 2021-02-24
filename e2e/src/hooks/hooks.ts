import { browser } from 'protractor';
import { Before, After, AfterAll, Status, BeforeAll } from 'cucumber';

Before( { timeout: 100 * 1000} , async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get("https://www.google.com/");
});

// Before({tags: '@getApi'}, async () => {
    
// });

After({ timeout: 100 * 1000 }, async function (scenario: any) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        // const img = Buffer.alloc(screenShot.length, screenShot, 'base64');
        this.attach(screenShot, 'image/png');
    }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
});