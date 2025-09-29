import {test, expect} from "@playwright/test";
import { pathToFileURL } from "url";


test("Login with valid",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();
})