import WebPage from "../core/WebPage"

class ShopPage extends WebPage {

    productNameTitle = 'h4.card-title'
    addButton = 'button.btn.btn-info'
    checkOutButton = '#navbarResponsive .btn-primary'
    productPriceText = '.card-body h5'

    addProduct(strProductName) {
        this.commonMethods.findElement(this.productNameTitle).each(($el, index) => {
            if ($el.text().trim() == strProductName) {
                return this.commonMethods.clickElementByIndex(this.addButton, index)
            }
        })
    }

    addMultipleProducts(arrProducts) {
        arrProducts.forEach(productName => {
            this.addProduct(productName)
        })
    }

    clickCheckOutButton() {
        return this.commonMethods.clickElement(this.checkOutButton)
    }

    validateCheckoutButtonContainsQuantity(intQuantity) {
        const strButtonText = `Checkout ( ${intQuantity} )`
        return this.commonMethods.validateElementText(this.checkOutButton, strButtonText)
    }

    getPriceOfProduct(strProductName) {
        this.commonMethods.findElement(this.productNameTitle).each(($el, index) => {
            if ($el.text().trim() == strProductName) {
                this.commonMethods.findElement(this.productPriceText)
                    .eq(index)
                    .invoke('text').then((priceText) => {
                        Cypress.env('price', priceText.toString())
                    })
            }
        })
        return Cypress.env('price')
    }
}

export default ShopPage;