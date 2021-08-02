import WebPage, { commonMethods } from "../core/WebPage"

class ProductPage extends WebPage {

    checkOutButton = 'app-shop .btn-success'

    clickCheckOutButton() {
        return commonMethods.clickElement(this.checkOutButton)
    }
}

export default ProductPage;