describe('Website Run', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should work', () => { 
    cy.get('h1').should('have.text', 'Users list')
  })

  it('Should accepts input', () => {
    const typedText = 'Leanne'
    cy.get('input')
      .type(typedText)
      .should('have.value', typedText)
  })

  it('Should validate status code', () => {
      cy.request('https://jsonplaceholder.typicode.com/users?username=Bret').as('Bret')
      cy.get('@Bret')
        .its('status')
        .should('equal', 200)
  })

  it('Should validate username', () => {
    cy.request('https://jsonplaceholder.typicode.com/users?username=Bret').as('Bret')
    cy.get('@Bret')
      .its('body')
      .should('have.length', 1)
  })

  it('Should display list of users', () => {
    cy.get('ul')
      .find('>div')
      .should('have.length', 10)
  })

  it('Should filter list of users', () => {
    const typedText = 'Leanne'
    cy.get('input')
      .type(typedText)
      .get('ul')
      .find('>div')
      .should('have.length', 1)
  })
})