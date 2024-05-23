import homePage from "./homepage";

class loginPage {

    webLocator = {
        emailInput: '#sign-username',
        passwordInput: '#sign-password',
        signupButton: 'button.btn.btn-primary'
    }

    signUpNewUser(Email, Password) {
        homePage.clickSignUpTab()
        cy.wait(1000)
        cy.get(this.webLocator.emailInput).type(Email)
        cy.get(this.webLocator.passwordInput).type(Password)
        cy.get(this.webLocator.signupButton).contains('Sign up').click({ force: true })
        cy.wait(3)
    }

    validateSuccessfullsignUp(msg) {
        cy.validateAlertMessage(msg)
    }

}

export default new loginPage();