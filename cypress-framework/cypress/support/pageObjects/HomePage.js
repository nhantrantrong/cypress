import WebPage from "../core/WebPage"

class HomePage extends WebPage {

    editBox = 'div.form-group input[name="name"]'
    twoWayDataBinding = 'div.form-group input[name="name"]'
    genderDropdown = 'select'
    entrepreneuerRadioButton = '#inlineRadio3'
    shopTab = 'li.nav-item .nav-link'

    typeValueIntoEditBox(value) {
        return this.commonMethods.typeElement(this.editBox, value)
    }

    typeTwoWayDataBinding(value) {
        return this.commonMethods.typeElement(this.twoWayDataBinding, value)
    }

    selectGender(value) {
        return this.commonMethods.selectDropdownElement(this.genderDropdown, value)
    }

    clickShoptab() {
        return this.commonMethods.clickElementContainsText(this.shopTab, 'Shop')
    }

    validateTwoWayDataBindingValue(expectedValue) {
        return this.commonMethods.validateElementValue(this.twoWayDataBinding, expectedValue)
    }

    validateEntrepreneuerRadioButtonDisabled() {
        return this.commonMethods.validateElementDisabled(this.entrepreneuerRadioButton)
    }

    validateLengthOfTwoWayDataBindingValue(length) {
        return this.commonMethods.validateElementAttribute(this.twoWayDataBinding, 'minlength', length)
    }
}

export default HomePage;