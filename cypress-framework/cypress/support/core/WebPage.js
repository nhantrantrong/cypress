import CommonMethods from "./CommonMethods";

class WebPage {

    commonMethods = new CommonMethods()

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

export default WebPage
