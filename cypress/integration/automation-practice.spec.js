/// <reference types="cypress" />

describe("Rahul Shetty automation practice test suite", () => {
    beforeEach(() => {
      cy.log("Load URL")
      cy.visit("https://rahulshettyacademy.com/AutomationPractice")
      cy.log("Wait 1000 milliseconds for site to load")
      cy.wait(1000)
    })

    //Radio button
    it("Can locate three radio buttons", () => {
        cy.get(".radioButton").should("have.length", 3)
    })

    //Dynamic Dropdown

    //Static Dropdown

    //Checkboxes

    //Tables

    //Tables: Fixed header

    //Hide/Show element

    //Mouse hover

    //iFrames


  })