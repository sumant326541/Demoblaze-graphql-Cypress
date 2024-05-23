
import signupPage from "../../../pages/signuppage"
import homePage from "../../../pages/homepage"

describe('User SignUp test', () => {


    beforeEach(() => {
        homePage.openUrl();
    });

    it('should signup with new user to product store', () => {
        cy.generateRandomData('signupdata'); // generate random email id
        cy.fixture("signupdata").then((signupdata) => {
            signupPage.signUpNewUser(signupdata.email, signupdata.password)
        });

        cy.fixture("constantdata").then((constantdata) => {  
            signupPage.validateSuccessfullsignUp(constantdata.signupsuccessmsg)
        });
    })

    it('should not signup with existing user to product store', () => {
       
        cy.fixture("logindata").then((logindata) => {
            signupPage.signUpNewUser(logindata.email, logindata.password)
        });

        cy.fixture("constantdata").then((constantdata) => {  
            cy.validateAlertMessage(constantdata.useralreadyexistmsg)
        });
    })

})