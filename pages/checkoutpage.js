class checkOutPage {
    weblocator = {
        addtocart: "Add to cart",
        delete: 'Delete',
        cartitem: '.success',
        placeorder: 'Place Order',
        name: '#name',
        country: '#country',
        city: '#city',
        creditcard: '#card',
        month: '#month',
        year: '#year',
        purchase: 'Purchase',
        successfulpurchasemsg: 'Thank you for your purchase!',
        okbtn: "OK"
    }

    addProductToCart(msg) {
        cy.contains(this.weblocator.addtocart).click()
        cy.validateAlertMessage(msg)
    }

    deleteFromCart() {
        cy.contains(this.weblocator.delete).click()
    }

    validateProductAddedToCart(product) {
        cy.contains(product).should('be.visible')
    }

    validateProductDeletedFromCart(product) {
        cy.contains(product).should('not.exist');
    }

    placeOrder(name, country, city, creditcard, month, year) {
        cy.contains(this.weblocator.placeorder).click()
        cy.wait(1000)
        cy.get(this.weblocator.name).type(name)
        cy.get(this.weblocator.country).type(country)
        cy.get(this.weblocator.city).type(city)
        cy.get(this.weblocator.creditcard).type(creditcard)
        cy.get(this.weblocator.month).type(month)
        cy.get(this.weblocator.year).type(year)
        cy.contains(this.weblocator.purchase).click()
        cy.wait(1000)
        cy.contains(this.weblocator.successfulpurchasemsg).should('be.visible')
        cy.contains(this.weblocator.okbtn).click()
    }

}
export default new checkOutPage();
