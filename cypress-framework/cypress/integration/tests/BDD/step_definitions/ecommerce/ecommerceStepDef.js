import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Pages } from "../../../../../support/factories/PageFactory";
import { Messages } from '../../../../../support/contants/Messages';

const homePage = Pages.HomePage
const shopPage = Pages.ShopPage
const productPage = Pages.ProductPage
const chooseDeliveryLocationPage = Pages.ChooseDeliveryLocationPage

Given('I open ecommerce page', function () {
    homePage.clickShoptab()
})

When('I add items to Cart', function () {
    shopPage.addMultipleProducts(this.studentData.productName)
    shopPage.clickCheckOutButton()
    productPage.clickCheckOutButton()
})

Then('Select the country submit', function () {
    chooseDeliveryLocationPage.checkOnAgreeCheckbox()
    chooseDeliveryLocationPage.typeCountryValue(this.studentData.deliveryLocation)
    chooseDeliveryLocationPage.clickPurchaseButton()
})

And('Validate thankyou message', function () {
    chooseDeliveryLocationPage.validateSuccessMessageShouldBeDisplayed(Messages.PURCHASE_SUCCESS)
})
