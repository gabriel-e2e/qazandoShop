
# Projeto de Automação de Testes - Cypress

Este repositório contém um projeto de automação de testes desenvolvido com Cypress e JavaScript. O objetivo do projeto é automatizar os cenários de teste para as funcionalidades de **Cadastro de Usuário** e **Login de Usuário**.

## 📋 Funcionalidades

- **Cadastro de Usuário:** Verificação do processo de registro de um novo usuário na aplicação.
- **Login de Usuário:** Testes para garantir que os usuários possam efetuar login corretamente.

## 🛠️ Tecnologias Utilizadas

- **Cypress:** Ferramenta de teste end-to-end para aplicações web.
- **JavaScript:** Linguagem de programação usada para escrever os testes.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute os testes:**
   ```bash
   npx cypress open
   ```
   Ou para rodar os testes em modo headless:
   ```bash
   npx cypress run
   ```

## 📁 Estrutura do Projeto

- `cypress/e2e/`: Contém os arquivos de teste para o cadastro e login de usuário.
  - `cadastroeLogin.cy.js`: Arquivo de teste que abrange os cenários de cadastro e login de usuário.
- `cypress/fixtures/`: Armazena os dados de teste.
  - `example.json`: Arquivo JSON usado para fornecer dados de teste.
- `cypress/support/`: Arquivos de suporte para os testes, como comandos customizados.
  - `commands.js`: Arquivo para definir comandos personalizados do Cypress.
  - `e2e.js`: Arquivo de configuração adicional para o suporte dos testes.
- `cypress.config.js`: Arquivo de configuração do Cypress.
- `package.json`: Arquivo que contém as dependências e scripts do projeto.

## 🧪 Cenários de Teste

### Cadastro de Usuário
- **Cadastro com sucesso:** Verifica se um novo usuário pode se cadastrar corretamente.
- **Cadastro com senha inválida:** Testa a validação de senha com menos de 6 dígitos.
- **Cadastro com email em formato inválido:** Verifica se o sistema rejeita um email no formato incorreto.

### Login de Usuário
- **Login com sucesso:** Testa se um usuário pode efetuar login com credenciais corretas.
- **Login com senha inválida:** Verifica se o sistema rejeita login com senha incorreta.
- **Login com email inválido:** Testa a validação de email em formato incorreto.

## 📝 Contribuições

Sinta-se à vontade para contribuir com melhorias ou sugestões para este projeto. Basta abrir um pull request ou criar uma issue.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
