describe("Registration", () => {
<<<<<<< HEAD
  beforeEach(() => {
    cy.task("clearUsers");
    cy.task("clearPosts");
  });

  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.visit("/");
    cy.get('[href="/users/new"]').contains("Sign Up").click();
    cy.get("#username").type("testusernames");
    cy.get("#email").type("testusers@example.com");
    cy.get("#password").type("Makers12345.");
=======
  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
>>>>>>> main
    cy.get("#submit").click();

    cy.url().should("include", "/sessions/new");
  });
});
