import {test} from '@playwright/test';
import {regPage} from "../Utils/TestData";
import {CreatedAccountPage} from "../Pages/Create_page";


test("Register with valid credentials", async({ page })=>{
    const data = regPage.valid;
    const createAcc = new  CreatedAccountPage( page );


    createAcc.gotUrl(data.url);
    createAcc.clickOnJon_Real();
    createAcc.fillName(data.firstName, data.lastName);
    createAcc.userNamee(data.userName);
    createAcc.enterEmail(data.emial);
    createAcc.enterPassword(data.password,data.confirmPassword)
    createAcc.clickonCheckBox();
    createAcc.clickOn_CreateAccountCTA(data.VerfyUrl);

})