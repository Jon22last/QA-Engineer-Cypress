describe('login', () => {
  it('login and logout', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('.inventory_list').should('be.visible')

    cy.get('#react-burger-menu-btn').click()

    cy.wait(500)

    cy.get('#logout_sidebar_link').click()

    cy.get('[data-test="login-button"]').should('be.visible')

  })
})