describe('checkout', () => {
    it('complete', () => {
      cy.visit('https://www.saucedemo.com/')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
  
      cy.get('[data-test="firstName"]').type('Ivan')
      cy.get('[data-test="lastName"]').type('Test')
      cy.get('[data-test="postalCode"]').type('12345')
  
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
  
      cy.get('.complete-header').should('be.visible')

      cy.get('#react-burger-menu-btn').click()
      cy.wait(500)
      cy.get('#logout_sidebar_link').click()
    })
  })