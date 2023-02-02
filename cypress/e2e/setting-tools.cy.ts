import LoginPage from "../pages/login.page";
import MainMenuPage from "../pages/main-menu.page";
import data from "../fixtures/login.json";
import verticalMenuPage from "../pages/setting/vertical-menu.page";
import SettingToolsPage from "../pages/setting/setting-tools.page";
import CreateNewToolPage from "../pages/setting/create-new-tool.page";

describe('testing setting tools', () => {
    let loginPage : LoginPage;
    let settingTools : SettingToolsPage;
    let creatNewTools : CreateNewToolPage;
    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit();
        let mainMenu : MainMenuPage;
        let verticalMenu : verticalMenuPage;
        mainMenu = loginPage.loginWithUserPassword(data.success[0].username, data.success[0].password);
        mainMenu.elements.settingIcon().click();
        verticalMenu = new verticalMenuPage();
        verticalMenu.elements.toolsBtn().click();
    })

    it ('',() => {
        settingTools = new SettingToolsPage();
        settingTools.filterColumn();
        creatNewTools = new CreateNewToolPage();
        creatNewTools.testCreateTools();
    })
})