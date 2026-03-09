import {test} from "@playwright/test";
import { RegisterPage } from "../Pages/RegisterPage";
import {regPage} from "../Data/TestData";

test('Valid data', async({page})=>{
    const register = new RegisterPage(page);
     const data = regPage.valid;


    await register.gotoURL(data.url);
    await register.fillName(data.firstName, data.lastName);
    await register.selectGender(data.gender);
    await register.selectExperience(data.exp);
    await register.addDate(data.date);
    await register.selectProfession(data.profession);
    await register.selectCountry(data.country);
    await register.selectCommands(data.commands);
    //await register.downloadlink();
    await register.uploadfile(data.file);
    await register.submitDetails();

});