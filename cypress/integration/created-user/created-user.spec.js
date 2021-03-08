describe('Fluxo de Cadatro', () => {
    it('Deve criar um novo usuário', () => {
        cy.visit('/index.html') // 1.

        cy.get('input#name') // 2.
            .type('Michael Souza', { force: true }).should('have.value', 'Michael Souza')

        cy.get('input#email')
            .type('maiconsilva260@gmail.com', { force: true }).should('have.value', 'maiconsilva260@gmail.com')

        cy.get('input#cpf')
            .type('43881219838', { force: true }).should('have.value', '438.812.198-38')

        cy.get('input#tel')
            .type('11964875158', { force: true }).should('have.value', '(11) 96487-5158')


    })

    context('Verificação de dados', () => {
        beforeEach(() => {
            cy.get('button')
                .click().should(() => {
                    cy.visit('/list-user.html')
                    it('Deve verificar se existe item no localStorage', () => {
                        expect(localStorage.getItem('user')).to.exist()
                    })
                })
        })

        it('Deve verificar a chamada', () => {
            cy.request('https://private-21e8de-rafaellucio.apiary-mock.com/users')
                .then((response) => {
                    expect(response).property('status').to.equal(200)
                })
        })


    })

})