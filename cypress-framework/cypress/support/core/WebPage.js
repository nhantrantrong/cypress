import CommonMethods from "./CommonMethods";

class WebPage {

    wait(ms) {
        return cy.wait(ms)
    }

    open(strUrl = '/') {
        return cy.visit(strUrl)
    }

    goBack() {
        return cy.go('back')
    }

    goForward() {
        return cy.go('forward')
    }
}

export const commonMethods = new CommonMethods()

export default WebPage
