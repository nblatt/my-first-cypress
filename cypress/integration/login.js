/// <reference types="Cypress" />

//const cypress = require("cypress");


describe('Log in to TAM app', () => {
    it.only('Log in using proper credentials', () => {
    //   cy.visit(loginUrl);
    //   cy.get('#username').type(username);
    //   cy.get('#password').type(password);   

    //   cy.get('.woocommerce-form :nth-child(3) > label > .element').click();
    //   cy.get('.woocommerce-form :nth-child(4) > label > .element').click();
    //   cy.get('button[name="login"]').click();
    //   //cy.wait(2000);
    //   cy.url().should('eq',myAccountUrl);
    
   //cy.console(Cypress.env())
    console.log(Cypress.env())
    
    
    }),

    it('Check all elements on page', () =>{
        cy.visit(loginUrl);
        cy.get('.h4').should('have.text','Login to Designmodo');
        cy.get('#username').should('have.attr','placeholder','Your Email');
        cy.get('#password').should('have.attr','placeholder','Password').should('have.attr','type','password');
        cy.get('.woocommerce-form').find('input[type="checkbox"]').should('have.length',2);
        cy.get('button[name="login"]').should('have.text','Login ->');
        cy.get('a[type="submit"]').should('have.text','Create Account');
        cy.get('.align-center > .text-primary').should('have.text','Forgot your password or cannot log in?');

    })
  })