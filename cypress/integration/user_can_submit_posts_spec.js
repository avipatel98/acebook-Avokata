<<<<<<< HEAD
/* eslint-disable quotes */
describe("Submitting posts", () => {
  beforeEach(() => {
    cy.task("clearUsers");
    cy.task("clearPosts");
  });

  it("can submit posts, when signed in, and view them", () => {
    // sign up
    cy.visit("/");
    cy.get('[href="/users/new"]').contains("Sign Up").click();
    cy.get("#username").type("anothersomeusername");
=======
describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    // sign up
    cy.visit("/users/new");
>>>>>>> main
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    // cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    // cy.visit("/posts");
    cy.contains("New post").click();

    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.get(".posts").should("contain", "Hello, world!");
  });
});
