const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dmd28w',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },

  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
});