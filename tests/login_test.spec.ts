import {test, expect} from "@playwright/test";
import { pathToFileURL } from "url";


test("Login with valid",async({page})=>{
     const dataa = regPage.valid;

    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");
    await page.locator("[name='firstname']").fill("Admin");
    await page.locator("[name='lastname']").fill("admin123");
    await page.locator("[value='Male']").click();
    await page.locator("#exp-2").click();
    await page.locator("#datepicker").fill("14/10/2025");
    await page.locator("[value='Automation Tester']").check();
    await page.locator("[value='Selenium Webdriver']").check();
    await page.selectOption("#continents",{label: 'Asia'});
    await page.selectOption("#selenium_commands", {label: 'Browser Commands'});
    await page.locator("#photo").setInputFiles("file/img.jpg");
    //await page.locator("text=Click here to Download File").click()
    await page.locator("#submit").click();

})