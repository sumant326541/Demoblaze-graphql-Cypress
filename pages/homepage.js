class homePage {
    openUrl() {
        cy.visit(Cypress.env('URL'));
    }

    webLocator = {
        loginTab: '#login2',
        signUpTab: '#signin2',
        loggedInuserName: '#nameofuser',
        prductCatagory: 'a#itemc',
        producttitle: '.card-title',
        cartTab: '#cartur'
    }

    clickSignUpTab() {
        cy.get(this.webLocator.signUpTab).click()
    }

    clickLoginTab() {
        cy.get(this.webLocator.loginTab).click()
    }

    validateLoggedInUser(userName) {
        cy.get(this.webLocator.loggedInuserName).should('have.text', 'Welcome ' + userName)
        cy.get(this.webLocator.loggedInuserName).should('have.text', 'Welcome ' + userName)
    }

    selectProductCatagory(productcatagory) {
        cy.get(this.webLocator.prductCatagory).contains(productcatagory).click()
    }

    selectProductBytitle(product) {
        cy.get(this.webLocator.producttitle).contains(product).click()
    }

    goToCart() {
        cy.get(this.webLocator.cartTab).click()
        cy.wait(1000)
    }

}
export default new homePage();
