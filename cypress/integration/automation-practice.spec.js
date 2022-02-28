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

    it("Can check each radio button, but not more than one at a time", () => {
      cy.get("input[value='radio1']").check().should("be.checked")
      cy.get("input[value='radio2']").check().should("be.checked")
      cy.get("input[value='radio3']").check().should("be.checked")
      cy.get("input[value='radio1']").should("not.be.checked")
      cy.get("input[value='radio2']").should("not.be.checked")
    })
    
    //Dynamic Dropdown
    it("Can type into the dynamic selection box and select a value", () => {
      cy.get("#autocomplete").type("ind")
      cy.get("#ui-id-1 .ui-menu-item").each(($el) => {
          if($el.text() === "India") {
            $el.trigger("click")
          }
      })
      cy.get("#autocomplete").should("contain.value", "India")
    })
    
    //Static Dropdown
    it("Can select an option from the static dropdown menu", () => {
      cy.get('#dropdown-class-example').select("option2")
      cy.get('#dropdown-class-example').should("have.value", "option2")
      cy.get('#dropdown-class-example').should("not.have.value", "option1")
    })
    

    //Checkboxes
    it("Can check and uncheck any of the three checkboxes", () => {
      cy.get('#checkBoxOption1').check().should("be.checked")
      cy.get('#checkBoxOption2').check().should("be.checked")
      cy.get('#checkBoxOption3').check().should("be.checked")
      cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
      cy.get('#checkBoxOption2').uncheck().should("not.be.checked")
      cy.get('#checkBoxOption3').uncheck().should("not.be.checked")
    })
    
    //Tables

    //Tables: Fixed header

    //Hide/Show element
    it("Can toggle and check the visibility of an element", () => {
      cy.get('#displayed-text').should("be.visible")
      cy.get('#hide-textbox').trigger("click")
      cy.get('#displayed-text').should("not.be.visible")
      cy.get('#show-textbox').trigger("click")
      cy.get('#displayed-text').should("be.visible")
    })
    //Mouse hover

    //iFrames


  })