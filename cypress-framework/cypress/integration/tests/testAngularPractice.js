/// <reference types="Cypress"/>

import { FixtureData, loadData } from "../../support/factories/DataFactory";
import { Pages } from "../../support/factories/PageFactory";
import { setupTest } from "./TestController";

describe('Angular Practice Test Suite', function () {

    const homePage = Pages.HomePage
    const shopPage = Pages.ShopPage
    var testData

    before(function () {
        setupTest()
        loadData(FixtureData.STUDENT).then((data) => {
            testData = data
        })
    })

    it('Test Home Page interacts', function () {
        homePage.typeValueIntoEditBox(testData.name)

        homePage.selectGender(testData.gender)

        // ==== Validations
        homePage.validateTwoWayDataBindingValue(testData.name)

        // use have.attr to validate element attribute
        homePage.validateLengthOfTwoWayDataBindingValue(2)

        homePage.validateEntrepreneuerRadioButtonDisabled()
    })

    it('Test Shop Page Interact', function () {
        homePage.clickShoptab()
        // cy.get('li.nav-item').each(($navigator) => {
        //     cy.log($navigator.text())
        //     const textVal = $navigator.text()
        //     if (textVal.includes('Shop')) {
        //         cy.log(textVal.includes('Shop'))
        //         $navigator.find('.nav-link').click()
        //     }
        // })


        shopPage.addMultipleProducts(testData.productName)
    })

})