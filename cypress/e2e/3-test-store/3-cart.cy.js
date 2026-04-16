describe('filter cart', () => {
    it('add product', () => {
      cy.visit('https://www.saucedemo.com/')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()

      cy.get('[data-test="product-sort-container"]').select('lohi')
      cy.get('.inventory_item').first().find('button').click()

      cy.get('[data-test="product-sort-container"]').select('hilo')
      cy.get('.inventory_item').first().find('button').click()
  
      cy.get('.shopping_cart_badge').should('have.text', '2')
  
      cy.get('#react-burger-menu-btn').click()
      cy.wait(500)
      cy.get('#logout_sidebar_link').click()
    })
  })