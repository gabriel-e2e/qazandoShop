
describe('Cadastro de usuário', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-lock"]').click()
        cy.get('#user').type('teste')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('h2.swal2-title#swal2-title').should('have.text', 'Cadastro realizado!');
    });
    it('Cadastro com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-lock"]').click()
        cy.get('#user').type('teste')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#password').type('1234')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos');
    });
    it('Cadastro com email em formato inválido', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-lock"]').click()
        cy.get('#user').type('teste')
        cy.get('#email').type('teste 1@ ')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente');
    });
});

describe('Login de usuário', () => {
    it('Login com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-user"]').click()
        cy.get('#user').type('teste@teste.com.br')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('h2.swal2-title#swal2-title').should('have.text', 'Login realizado');
    });
    it('Login com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-user"]').click()
        cy.get('#user').type('teste@teste.com.br')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('Login com email inválido', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('i[class="fa fa-user"]').click()
        cy.get('#user').type('teste 1@ ')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

});