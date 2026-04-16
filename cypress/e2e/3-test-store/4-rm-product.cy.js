describe('rm product', () => {
    it('cart should update after removing product', () => {
      cy.visit('https://www.saucedemo.com/')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_badge').should('have.text', '1')

      cy.get('[data-test="remove-sauce-labs-backpack"]').click()

      cy.get('.shopping_cart_badge').should('not.exist')

      cy.get('[data-test="shopping-cart-link"]').click()

      cy.get('.cart_item').should('not.exist')

      cy.get('#react-burger-menu-btn').click()
      cy.wait(500)
      cy.get('#logout_sidebar_link').click()
    })
  })