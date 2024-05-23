const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false, // Generate HTML report in the final step
    json: true,
    reportFilename: 'report',
  },

  chromeWebSecurity: false,
  video: true,
  e2e: {
    "viewportWidth": 1400,
    "viewportHeight": 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    URL: 'https://www.demoblaze.com/index.html'
  }
});
