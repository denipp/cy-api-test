// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiRequest', (method, endpoint, options = {}) => {
    cy.request({
        method,
        url: `${Cypress.env('baseUrl') || 'https://gorest.co.in/public/v2'}${endpoint}`, failOnStatusCode: false,
        headers: {
            'x-api-key': 'reqres-free-v1',
            'Authorization': `Bearer c6e1938c9268f231e7209ec36744768f87dd1fe33c389a2f28615a2a9166750c`,
            ...options.headers,
        },
        body: options.body,
        ...options,
    });
});
