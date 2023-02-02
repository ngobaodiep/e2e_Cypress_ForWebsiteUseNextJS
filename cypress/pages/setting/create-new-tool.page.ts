
import el from '../../resources/element/web-elements.json'

export default  class CreateNewToolPage{
    public elements;

    constructor() {
        this.elements = {
            createToolsBtn : () => cy.get(el.setting.tools.createToolsBtn),
            nameInput : () => cy.get(el.setting.tools.createNew.nameInput),
            referenceInput : () => cy.get(el.setting.tools.createNew.referenceInput),
            manufacturerInput : () => cy.get(el.setting.tools.createNew.manufacturerInput),
            categoryInput : () => cy.get(el.setting.tools.createNew.categoryInput),
            categoryInputDefault : () => cy.get(el.setting.tools.createNew.categoryInputDefault),
            groupInput : () => cy.get(el.setting.tools.createNew.groupInput),
            groupInputFirst : () => cy.get(el.setting.tools.createNew.groupInputFirst),
            serialNumberInput : () => cy.get(el.setting.tools.createNew.serialNumberInput),
            serialNumberInputFirst : () => cy.get(el.setting.tools.createNew.serialNumberInputFirst),
            descriptionInput : () => cy.get(el.setting.tools.createNew.descriptionInput),
            cancelInCreate : () => cy.get(el.setting.tools.createNew.cancel),
            saveInCreate : () => cy.get('button').contains(el.setting.tools.createNew.save),
            rightSuccess : () => cy.get(el.setting.notification.rightSuccess)
        }
    }
    public testCreateTools(){
        this.elements.createToolsBtn().click();
        this.elements.nameInput().type("test name",{force:true});
        this.elements.referenceInput().type("test reference",{force:true});
        this.elements.manufacturerInput().type("test manufacturer",{force:true});
        this.elements.categoryInput().click({force:true});
        this.elements.categoryInputDefault().click({force:true});
        this.elements.descriptionInput().type("test description",{force:true});
        this.elements.saveInCreate().click({force:true});
    }
}