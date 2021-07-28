describe("todo App", () => {
  //Teste unsere App

  it("should add li elements", () => {
    cy.visit("http://localhost:5000/");
    cy.get("#input").type("learn cypress");
    cy.get("#add-button").click();

    cy.get("#list").get("ul").should("have.length", 1);
  });
});
