
import loginPage from "../../../pages/loginPage"
import homePage from "../../../pages/homepage"

describe('Verify User Login Scenario', () => {

    beforeEach(() => {
        homePage.openUrl();
    });

    it('should login to product store', () => {
        cy.fixture("logindata").then((logindata) => {
            loginPage.loginWithValidUser(logindata.email, logindata.password)
            homePage.validateLoggedInUser(logindata.email)
        });
    })

    const testData = [
        { user: 'Testproduct@gmail.com', invalidpassword: 'invalidpassword', errormsg: 'Wrong password.' }, //valid user , wrong password
        { user: 'invaliduser', invalidpassword: 'invalidpassword', errormsg: 'User does not exist.' } //invalid user
    ];

    testData.forEach(({ user, invalidpassword, errormsg }) => {

        it(`should not login to product store and validate error message ${errormsg}`, () => {
            loginPage.loginWithValidUser(user, invalidpassword)
            cy.validateAlertMessage(errormsg)
        })
    })

})