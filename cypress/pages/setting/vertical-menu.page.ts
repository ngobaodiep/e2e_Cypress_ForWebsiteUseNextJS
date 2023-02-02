
import el from '../../resources/element/web-elements.json'

export default  class verticalMenuPage{
    public elements;

    constructor() {
        this.elements = {
            toolsBtn : () => cy.get(el.setting.verticalMenu.toolsBtn,{timeout:30000})
        }
    }
}