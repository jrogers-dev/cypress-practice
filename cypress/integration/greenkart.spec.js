/// <reference types="cypress" />

describe("GreenKart Test Suite", () => {
  beforeEach(() => {
    cy.log("Reload URL")
    cy.visit("https://rahulshettyacademy.com/seleniumPractise")
    cy.log("Wait 500 milliseconds for site to load")
    cy.wait(500)
  })

  it("Can request the GreenKart practice site and receive status 200", () => {
    cy.log("Ensure response status code is 200")
    cy.request("/").then( (response) => {
      expect(response).to.have.property("status").eq(200)
    })
  })

  it("There are products visible on the site", () => {
    cy.get(".products").find(".product:visible").should("exist")
  })

  it("There should be 30 products visible on the site", () => {
    cy.get(".products").find(".product").should("have.length", 30)
  })

  it("The search box is visible, enabled and receives text input", () => {
    cy.get(".search-keyword").
    cy.get(".search-keyword").should("be.visible")
    cy.get(".search-keyword").should("be.enabled")
    cy.get(".search-keyword").type("cucumber")
    cy.get(".search-keyword").should("have.value", "cucumber")
  })

  it("Product list updates according to searched text", () => {
    cy.get(".search-keyword").type("cucumber")
    cy.get(".products").find(".product:visible").should("have.length", 1)
    cy.get(".products").find(".product:visible").should("contain.text", "Cucumber")
  }) 

  it("Product can be added to cart, and cart info is updated", () => {
    cy.get(".search-keyword").type("beetroot")
    cy.wait(500)
    cy.get(".products").find(".product:visible").should("have.length", 1)
    cy.get(".products").find(".product:visible").should("contain.text", "Beetroot")
    cy.get(".products").find(".product:visible").find(".product-action button").click()
    cy.get(':nth-child(1) > :nth-child(3) > strong').should("contain.text", "1")
    cy.get(':nth-child(2) > :nth-child(3) > strong').should("contain.text", "32")
  })

  it("Can add product to cart, view cart, select country and place order", () => {
    cy.get(".search-keyword").type("beetroot")
    cy.wait(500)
    cy.get(".products").find(".product:visible").find(".product-action button").click()
    cy.get('.cart-icon > img').click()
    cy.get('.cart-preview > .action-block > button').click()
    cy.url().should("equal", "https://rahulshettyacademy.com/seleniumPractise/#/cart")
    cy.get('tbody > tr > :nth-child(2)').should("contain.text", "Beetroot")
    cy.get('tbody > tr > :nth-child(3)').should("contain.text", "1")
    cy.get('.products').find("button").each( ($el) => {
      if($el.text() === "Place Order") {
        cy.wrap($el).click()
      }
    })
    cy.get('select').select("United States")
    cy.get('.chkAgree').click()
    cy.get('button').each( ($el) => {
      if($el.text() === "Proceed") {
        cy.wrap($el).click()
      }
    })
    cy.get('.wrapperTwo').should("contain.text", "Thank you, your order has been placed successfully")
  })
})