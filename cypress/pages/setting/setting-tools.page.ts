
import el from '../../resources/element/web-elements.json'

export default  class SettingToolsPage{
    public elements;

    constructor() {
        this.elements = {
            searchByTextBox : () => cy.get(el.setting.tools.searchByTextBox),
            searchByBtn : () => cy.get(el.setting.tools.searchByBtn),
            recordRowAll : () => cy.get(el.setting.tools.recordRowAll),
            itself : () => cy.get(el.setting.tools.popup.itself),
            editBtn : () => cy.get(el.setting.tools.popup.editBtn),
            deleteBtn : () => cy.get(el.setting.tools.popup.deleteBtn),
            namePopup : () => cy.get(el.setting.tools.popup.name),
            statusPopup : () => cy.get(el.setting.tools.popup.status),
            referencePopup : () => cy.get(el.setting.tools.popup.reference),
            categoryPopup : () => cy.get(el.setting.tools.popup.category),
            boxOtherInformation : () => cy.get(el.setting.tools.popup.boxOtherInformation),
            closeBtn : () => cy.get(el.setting.tools.popup.closeBtn),
            allColumnSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.allColumn),
            referenceSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.reference),
            nameSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.name),
            categorySearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.category),
            groupSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.group),
            lithiumBatterySearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.lithiumBattery),
            batteryLevelSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.batteryLevel),
            statusSearchOption : () => cy.get('li').contains(el.setting.tools.searchOption.status)
        }
    }
    public filterColumn(){
        this.elements.searchByTextBox().type("6");

        this.elements.searchByBtn().click();
        this.elements.referenceSearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.nameSearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.categorySearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.groupSearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.lithiumBatterySearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.batteryLevelSearchOption().click();

        this.elements.searchByBtn().click();
        this.elements.statusSearchOption().click();

        this.elements.searchByTextBox().clear();
        this.elements.searchByBtn().click();
        this.elements.allColumnSearchOption().click();
    }

}