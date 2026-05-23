describe("RealBeans basic tests", () => {

  it("homepage loads", () => {
    cy.visit("/");
    cy.contains("RealBeans").should("exist");
  });

  it("about page exists", () => {
    cy.visit("/about");
    cy.contains("From a small Antwerp grocery").should("exist");
  });

});