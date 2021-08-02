import WebPage, { commonMethods } from "../core/WebPage"

class HomePage extends WebPage {

    editBox = 'div.form-group input[name="name"]'
    twoWayDataBinding = 'div.form-group input[name="name"]'
    genderDropdown = 'select'
    entrepreneuerRadioButton = '#inlineRadio3'
    shopTab = 'li.nav-item .nav-link'

    typeValueIntoEditBox(value) {
        return commonMethods.typeElement(this.editBox, value)
    }

    typeTwoWayDataBinding(value) {
        return commonMethods.typeElement(this.twoWayDataBinding, value)
    }

    selectGender(value) {
        return commonMethods.selectDropdownElement(this.genderDropdown, value)
    }

    clickShoptab() {
        return commonMethods.clickElementContainsText(this.shopTab, 'Shop')
    }

    validateTwoWayDataBindingValue(expectedValue) {
        return commonMethods.validateElementValue(this.twoWayDataBinding, expectedValue)
    }

    validateEntrepreneuerRadioButtonDisabled() {
        return commonMethods.validateElementDisabled(this.entrepreneuerRadioButton)
    }

    validateLengthOfTwoWayDataBindingValue(length) {
        return commonMethods.validateElementAttribute(this.twoWayDataBinding, 'minlength', length)
    }
}

export default HomePage;