import WebPage from "../core/WebPage"

class ChooseDeliveryLocationPage extends WebPage {

    countryInput = 'input#country'
    agreeCheckbox = '#checkbox2'
    purchaseButton = 'input[value="Purchase"]'
    successMessage = 'div.alert-success'

    typeCountryValue(strCountry) {
        return this.commonMethods.typeElement(this.countryInput, strCountry)
    }

    checkOnAgreeCheckbox() {
        return this.commonMethods.checkElement(this.agreeCheckbox, true)
    }

    clickPurchaseButton() {
        return this.commonMethods.clickElement(this.purchaseButton)
    }

    validateSuccessMessageShouldBeDisplayed(strMessage) {
        return this.commonMethods.validateElementTextInclude(this.successMessage, strMessage)
    }

}

export default ChooseDeliveryLocationPage;