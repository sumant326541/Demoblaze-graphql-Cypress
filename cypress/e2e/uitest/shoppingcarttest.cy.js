import homePage from '../../../pages/homepage';
import loginPage from "../../../pages/loginPage"
import checkoutPage from '../../../pages/checkoutpage'
describe('Verify shopping Cart Functionality', () => {

    beforeEach(() => {
        homePage.openUrl();
        cy.fixture("logindata").then((logindata) => {
            loginPage.loginWithValidUser(logindata.email, logindata.password)
            homePage.validateLoggedInUser(logindata.email)
        });
    });

    it('should add and delete product to cart and verify the cart', () => {
        cy.fixture("checkoutdata").then((checkoutdata) => {
            homePage.selectProductCatagory(checkoutdata.productcatagory)
            homePage.selectProductBytitle(checkoutdata.product)
            checkoutPage.addProductToCart(checkoutdata.productaddetocartmsg)
            homePage.goToCart()
            checkoutPage.validateProductAddedToCart(checkoutdata.product)
            checkoutPage.deleteFromCart()
            checkoutPage.validateProductDeletedFromCart(checkoutdata.product)

        });
    });

    it('should place order the product', () => {
        cy.fixture("checkoutdata").then((checkoutdata) => {
            homePage.selectProductCatagory(checkoutdata.productcatagory)
            homePage.selectProductBytitle(checkoutdata.product)
            checkoutPage.addProductToCart(checkoutdata.productaddetocartmsg)
            homePage.goToCart()
            checkoutPage.validateProductAddedToCart(checkoutdata.product)
            checkoutPage.placeOrder(checkoutdata.name,checkoutdata.country,checkoutdata.city,checkoutdata.card,checkoutdata.month,checkoutdata.city,checkoutdata.card,checkoutdata.year)

        });
    });
});