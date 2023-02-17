describe("Home page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get(".title").should("contain", "Acebook");
  });
  it ("has sign up and login buttons", () => {
    cy.visit("/")
    cy.get("header").should("contain", "Log In")
    cy.get("header").should("contain", "Sign Up")
  })
});
