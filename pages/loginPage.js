import homePage from "./homepage";

class loginPage {

    webLocator = {
        emailInput: '#loginusername',
        passwordInput: '#loginpassword',
        loginButton: 'button.btn.btn-primary',
    }

    loginWithValidUser(Email, Password) {
        homePage.clickLoginTab()
        cy.wait(1000)
        cy.get(this.webLocator.emailInput).type(Email)
        cy.get(this.webLocator.passwordInput).type(Password)
        cy.get(this.webLocator.loginButton).contains('Log in').click({ force: true })
        cy.wait(2000)
    }

}
export default new loginPage();