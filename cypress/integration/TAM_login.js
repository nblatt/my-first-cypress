/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    return cy
      .request({
        method: 'POST',
        url: 'https://login.microsoftonline.com/d70890a4-3ec5-4da3-b812-61e6b3ff4ae7/oauth2/token',
        form: true,
        body: {
          grant_type: 'password',
          tenant: 'd70890a4-3ec5-4da3-b812-61e6b3ff4ae7',
          client_id: 'fd10d2bc-91a1-4115-b8c2-409d4eb42334',
          client_secret: 'x6gbHZt3BEDkeVYRPxHZkfVVWRGUuxwwGynmeUJ14wk=',
          username: 'nblat@future-processing.com',
          password: 'X+lT2jLOIIkPP1',
          resource: 'fd10d2bc-91a1-4115-b8c2-409d4eb42334',
        },
      })
      .then((response) => {
        sessionStorage.setItem('access_token', response.body.access_token);
      });
  });

describe('Log in to TAM app', () => {
    it('Log in using proper credentials', () => {
        cy.login();
      cy.visit('https://teamsallocationmanager.z16.web.core.windows.net/');
    })
  })