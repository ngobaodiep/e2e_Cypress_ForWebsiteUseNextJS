
import el from '../resources/element/web-elements.json'
import MainMenuPage from "./main-menu.page";

export default  class LoginPage{
    public elements;

    constructor() {
        this.elements = {
            username : () => cy.get(el.login.username),
            password : () => cy.get(el.login.password),
            submitButton :  () => cy.get(el.login.submitButton),
            errorMessage  :  () =>  cy.get(el.login.errorMessage),
            usernameHelper  :  () => cy.get(el.login.usernameHelper),
            passwordHelper  :  () => cy.get(el.login.passwordHelper)
        }
    }

    public  enterUserName(username: string){
        this.elements.username().clear();
        if (username.length > 0)
            this.elements.username().type(username);
    }
    public  enterPassword(password: string){
        this.elements.password().clear();
        if (password.length > 0)
        this.elements.password().type(password);
    }

    public  clickSubmit(){
        this.elements.submitButton().click();
    }

    public  loginWithUserPassword(username: string, password: string){
         this.enterUserName(username);
         this.enterPassword(password);
         this.clickSubmit();
         let mainMenu : MainMenuPage = new MainMenuPage();
         return mainMenu;
    }

    public async visit(){
        cy.visit('http://localhost:3000');
    }


}