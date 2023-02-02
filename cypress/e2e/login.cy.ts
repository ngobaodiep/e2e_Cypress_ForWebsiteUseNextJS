import LoginPage from "../pages/login.page";
import MainMenuPage from "../pages/main-menu.page";
import data from "../fixtures/login.json";

describe('test login page', () => {
    let loginPage : LoginPage;
    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit();
    })

    function verifyLoginScreen(){
        cy.title().should('contain','Logifleet 360')
        loginPage.elements.username().should('be.visible');
        loginPage.elements.password().should('be.visible');
        loginPage.elements.submitButton().should('be.visible');

        //should show proper error message for blank user/pas
        loginPage.loginWithUserPassword('','');
        loginPage.elements.usernameHelper().should('exist');
        loginPage.elements.passwordHelper().should('exist');

        //should remove error message for non-blank user/pass
        loginPage.enterUserName('username');
        loginPage.enterPassword('password');
        loginPage.elements.usernameHelper().should('not.exist');
        loginPage.elements.passwordHelper().should('not.exist');
    }

    it('verify login screen',()=>{
        verifyLoginScreen();
    })

    it('login fail', () => {
        cy.fixture('login.json').then((data) => {
            data.fail.forEach((failCase)=>{
                loginPage.loginWithUserPassword(failCase.username,failCase.password);
                loginPage.elements.errorMessage().should('exist');
            })
        })
    })

    for (const successCase of data.success){
        it('login successfully: '+successCase.username,() => {
            let mainMenu : MainMenuPage;
            mainMenu = loginPage.loginWithUserPassword(successCase.username,successCase.password);
            mainMenu.elements.settingIcon().should('be.visible');
        })
    }
})