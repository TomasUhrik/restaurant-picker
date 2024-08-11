describe("App", () => {
  it("Shows random venue on app visit", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("match", /\/place\/[^/]+$/);
  });

  // It can happen that the random test fails because we randomly get the same venue again -> adding 3 retries
  it("Randomize venue", { retries: 3 }, () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("match", /\/place\/[^/]+$/);

    cy.window().then((win) => {
      const currentUrl = win.location.href;

      cy.contains("button", "Randomize").click();
      cy.url().should("not.eq", currentUrl);
    });
  });

  // It can happen that the test fails because we randomly get the same venue that we select from search -> adding 3 retries
  it("Search venue", { retries: 3 }, () => {
    cy.visit("http://localhost:3000/");

    cy.get(`input[placeholder="Search by food type or venue name..."]`).type(
      "ramen"
    );

    cy.window().then((win) => {
      const currentUrl = win.location.href;

      cy.get('[data-cy="venue-option"]')
        .first()
        .click()
        .then((element) => {
          const venueName = element.text();

          // url changed
          cy.url().should("not.eq", currentUrl);

          // venue info loaded
          cy.get("h2").contains(venueName);
        });
    });
  });
});
