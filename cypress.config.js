const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1930,
  viewportHeight: 1080,
  //cy.viewport(1024, 768)
  e2e: {
    testIsolation: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
