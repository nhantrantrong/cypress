import WebPage, { commonMethods } from "../core/WebPage"

class ChooseDeliveryLocationPage extends WebPage {

    countryInput = 'input#country'
    agreeCheckbox = '#checkbox2'
    purchaseButton = 'input[value="Purchase"]'
    successMessage = 'div.alert-success'

    typeCountryValue(strCountry) {
        return commonMethods.typeElement(this.countryInput, strCountry)
    }

    checkOnAgreeCheckbox() {
        return commonMethods.checkElement(this.agreeCheckbox, true)
    }

    clickPurchaseButton() {
        return commonMethods.clickElement(this.purchaseButton)
    }

    validateSuccessMessageShouldBeDisplayed(strMessage) {
        return commonMethods.validateElementTextInclude(this.successMessage, strMessage)
    }

}

export default ChooseDeliveryLocationPage;