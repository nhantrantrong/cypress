/// <reference types="Cypress"/>


import { FixtureData, loadData } from "../../support/factories/DataFactory";
import { Pages } from "../../support/factories/PageFactory";
import { Messages } from '../../support/contants/Messages';
import { setupTest } from './TestController';

describe('Angular Practice Shop Test Suite', function () {

    const homePage = Pages.HomePage
    const shopPage = Pages.ShopPage
    const productPage = Pages.ProductPage
    const chooseDeliveryLocationPage = Pages.ChooseDeliveryLocationPage
    var studentData

    before(function () {
        setupTest()
        loadData(FixtureData.STUDENT).then((data) => {
            studentData = data
        })
    })

    it('Test Shop Page Interact', function () {

        homePage.clickShoptab()

        shopPage.addMultipleProducts(studentData.productName)

        shopPage.clickCheckOutButton()

        productPage.clickCheckOutButton()

        chooseDeliveryLocationPage.checkOnAgreeCheckbox()

        chooseDeliveryLocationPage.typeCountryValue(studentData.deliveryLocation)

        chooseDeliveryLocationPage.clickPurchaseButton()

        chooseDeliveryLocationPage.validateSuccessMessageShouldBeDisplayed(Messages.PURCHASE_SUCCESS)
    })
})