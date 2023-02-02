
import el from '../resources/element/web-elements.json'

export default  class MainMenuPage{
    public elements;

    constructor() {
        this.elements = {
            logoutBtn : () => cy.get(el.mainMenu.logoutBtn,{timeout:30000}),
            settingIcon : () => cy.get(el.mainMenu.settingIcon)
        }
    }
}