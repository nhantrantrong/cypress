import ChooseDeliveryLocationPage from "../pageObjects/ChooseDeliveryLocationPage"
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
import ShopPage from "../pageObjects/ShopPage"

export const Pages = {
    HomePage: new HomePage(),
    ShopPage: new ShopPage(),
    ProductPage: new ProductPage(),
    ChooseDeliveryLocationPage: new ChooseDeliveryLocationPage()
}