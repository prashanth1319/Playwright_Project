import{Page} from "@playwright/test";
import {regPage} from "../Data/TestData";

export class RegisterPage{
 private page: Page;

 constructor(page:Page){
    this.page=page;
 }

 //Locator
 private firstNmae = "[name='firstname']";
 private lastName = "[name='lastname']";
 private Datepicker = "#datepicker";
 private uploadImg = "#photo";
 private downloadLink = "text=Click here to Download File"
 private submit = "#submit"

 //Action
 async gotoURL(url:string){
    await this.page.goto(url)
 }
 async fillName(fstname:any, lstname:any){
    await this.page.locator(this.firstNmae).fill(fstname);
    await this.page.pause();
    await this.page.locator(this.lastName).fill(lstname);
 }

 async selectGender(gender:any){
    await this.page.locator(`input[type='radio'][value='${gender}']`).check();
 }
 async selectExperience(exp:any){
    await this.page.locator(`input[type='radio'][value='${exp}']`).click();
 }
 async addDate(date:any){
    await this.page.locator(this.Datepicker).fill(date);
 }
 async selectProfession(profession:any){
    await this.page.locator(`input[type='checkbox'][value='${profession}']`).check();
 }
 async selectCountry(country:any){
    await this.page.selectOption("#continents",{label:country});
 }
 async selectCommands(commands:any){
    await this.page.selectOption("#selenium_commands", {label:commands});
 }
 async uploadfile(filePath:any){
    await this.page.setInputFiles(this.uploadImg, filePath);
 }
 async downloadlink(){
    await this.page.locator(this.downloadLink).click();
 }
 async submitDetails(){
    await this.page.locator(this.submit).click();
    console.log('form submited succesfully')
    await this.page.close();
 }

}