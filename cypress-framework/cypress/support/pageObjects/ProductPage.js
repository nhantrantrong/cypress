import WebPage from "../core/WebPage"

class ProductPage extends WebPage {

    checkOutButton = 'app-shop .btn-success'

    clickCheckOutButton() {
        return this.commonMethods.clickElement(this.checkOutButton)
    }
}

export default ProductPage;