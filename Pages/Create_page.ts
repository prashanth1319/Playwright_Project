import { Page, expect } from "@playwright/test";

export class CreatedAccountPage{

 private page:Page;

  constructor(page:Page){
    this.page=page;
  }

//Locators

private join = "text=Join Real";
private  firstName = "[name='firstName']";
private lastName = "[name='lastname']";
private userName = "[name='username']";
private email = "[nam='emailAddress']";
private password = "[name = 'password']";
private confirmPassword = "[name='confirmPassword']";
private eyeIcon = "[data-icon='eye']";
private TermsCheck = "#mantine-g1o0fm2ga";
private allowCallsCheck = "#mantine-3eq7pxiz8";
private CretaCta = "[type='submit']";



// Action methods

async gotUrl(url:any){
    await this.page.goto(url);
}

async clickOnJon_Real(){
    await this.page.locator(this.join).click();
}

async fillName(fstName:any, lstName:any){

    await this.page.locator(this.firstName).fill(fstName);
    await this.page.locator(this.firstName).fill(lstName);

}

async userNamee(username:any){
     await this.page.locator(this.userName).fill(username);
}

async enterEmail(emailId:any){
     await this.page.locator(this.email).fill(emailId);
    
}

async enterPassword(pass:any,confirmpass:any ){
     await this.page.locator(this.password).fill(pass);
     await this.page.locator(this.eyeIcon).first().click();

    await this.page.locator(this.confirmPassword).fill(confirmpass);
    await this.page.locator(this.eyeIcon).nth(1).click();
    
}

async clickonCheckBox(){
    await this.page.locator(this.TermsCheck).check();
    await this.page.locator(this.allowCallsCheck).check();

}

async clickOn_CreateAccountCTA(urlVerify:any){
    await this.page.locator(this.CretaCta).click();
    await expect(this.page).toHaveTitle(urlVerify);
}

}

