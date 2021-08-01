class CommonMethods {

    findElement(locator) {
        return cy.get(locator)
    }

    typeElement(locator, value) {
        return this.findElement(locator)
            .type(value)
    }

    selectDropdownElement(locator, value) {
        return this.findElement(locator)
            .select(value)
    }

    clickElement(locator) {
        return this.findElement(locator)
            .click()
    }

    clickElementContainsText(locator, strText) {
        return this.findElement(locator)
            .contains(strText)
            .click()
    }

    clickElementByIndex(locator, intIndex) {
        return this.findElement(locator)
            .eq(intIndex)
            .click()
    }

    validateElementValue(locator, expectedValue) {
        return this.findElement(locator)
            .should('have.value', expectedValue)
    }

    validateElementText(locator, expectedText) {
        return this.findElement(locator)
            .should('have.text', expectedText)
    }

    validateElementDisabled(locator) {
        return this.findElement(locator)
            .should('be.disabled')
    }

    validateElementAttribute(locator, attributeName, attributeValue) {
        return this.findElement(locator)
            .should('have.attr', attributeName, attributeValue)
    }

    validateElementTextInclude(locator, expectedText) {
        return this.findElement(locator).then((element) => {
            const actualText = element.text()
            expect(actualText).to.include(expectedText)
        })
    }

    checkElement(strLocator, force = false) {
        if (force) {
            return this.findElement(strLocator).check({ force: true });
        } else {
            return this.findElement(strLocator).check();
        }
    }
}

export default CommonMethods