import WebPage, { commonMethods } from "../core/WebPage"

class ShopPage extends WebPage {

    productNameTitle = 'h4.card-title'
    addButton = 'button.btn.btn-info'
    checkOutButton = '#navbarResponsive .btn-primary'
    productPriceText = '.card-body h5'

    addProduct(strProductName) {
        commonMethods.findElement(this.productNameTitle).each(($el, index) => {
            if ($el.text().trim() == strProductName) {
                return commonMethods.clickElementByIndex(this.addButton, index)
            }
        })
    }

    addMultipleProducts(arrProducts) {
        arrProducts.forEach(productName => {
            this.addProduct(productName)
        })
    }

    clickCheckOutButton() {
        return commonMethods.clickElement(this.checkOutButton)
    }

    validateCheckoutButtonContainsQuantity(intQuantity) {
        const strButtonText = `Checkout ( ${intQuantity} )`
        return commonMethods.validateElementText(this.checkOutButton, strButtonText)
    }
}

export default ShopPage;