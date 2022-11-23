describe('empty spec', () => {
    before(()=>{
        cy.log('hello from the before hook')
    })
  it('testcase #1', () => {
    cy.log('hello world')
  })

 after(()=>{
        cy.log('hello from the after hook')
    })

beforeEach(()=>{
    cy.log('hello from the before each hook')
})

afterEach(()=>{
    cy.log('hello from the after each hook')
})


   it('testcase #2', () => {
    cy.log('hello world')
  })

   it.only('testcase #3', () => {
    cy.log('hello world')
  })

     it('testcase #4', () => {
    cy.log('hello world')
  })
})