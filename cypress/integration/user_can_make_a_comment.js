/* eslint-disable quotes */
describe("Liking post tests", () => {
    beforeEach(() => {
      cy.task("clearUsers");
      cy.task("clearPosts");
      cy.task("clearComments")
    });
  
    it("can comment on a post", () => {
      // sign up
    cy.visit("/");
    cy.get('[href="/users/new"]').contains("Sign Up").click();
    cy.get("#username").type("anothersomeusername");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("pA$sw0rd");
    cy.get("#submit").click();

      // sign in
    // cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("pA$sw0rd");
    cy.get("#submit").click();

    cy.get('[type="submit"]').contains("New post").click();
    cy.get("#new-post-form").find("textarea").type("Hello, world!");
    cy.get("#new-post-form").submit();
    
      // Assert that we can see the likes count
    cy.contains("0 Comments").click();
    cy.url().should('include', '/posts/')
    cy.contains("New Comment").click();
    cy.get("#new-post-form").find("textarea").type("This is a test comment");
    cy.get("#new-post-form").submit();
    cy.get(".posts").should("contain", "This is a test comment");
    });
});
