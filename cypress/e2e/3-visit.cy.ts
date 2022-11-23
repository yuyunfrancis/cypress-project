describe('basics', () => {
    beforeEach(()=>{
    cy.visit('/textinput')
    })
  
    it('visit explanation text input', () => {
   cy.url().then((url) => {
    cy.log(`printing the url : ${url}`)
    expect(url).to.contains('/textinput')
   })
  })

  it("title validation",()=>{
    cy.title().then((title)=>{
        cy.log(title)
        expect(title).to.be.equal('Text Input')
    })
  })

  it("Input Challenge", ()=> {
    cy.get('input#newButtonName').type('Hello from input')
    cy.get('button#updatingButton').click().should('have.text',"Hello from input")
  })

})