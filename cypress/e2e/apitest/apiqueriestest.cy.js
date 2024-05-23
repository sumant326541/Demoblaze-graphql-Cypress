// countries.spec.js
import { GRAPHQL_URL, GRAPHQL_HEADERS } from '../../support/graphqlconfig';

describe('GraphQL Countries API', () => {
  it('Retrieves Andorra with correct continent information', () => {
    cy.readFile('cypress/fixtures/countryByCodeQuery.graphql').then(query => {
      const variables = {
        code: "AD"  // Use "AD" for testing Andorra
      };
      cy.request({
        method: 'POST',
        url: GRAPHQL_URL,
        body: JSON.stringify({
          query,
          variables
        }),
        headers: GRAPHQL_HEADERS,
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        const country = response.body.data.country;

        // Assert country details for Andorra
        expect(country).to.have.property('name', 'Andorra');
        expect(country).to.have.property('native', 'Andorra');
        expect(country).to.have.property('capital');
        expect(country).to.have.property('currency');
        expect(country).to.have.property('languages').that.is.an('array');

        // Assert continent information for Andorra
        expect(country).to.have.property('continent');
        expect(country.continent).to.have.property('code', 'EU');
        expect(country.continent).to.have.property('name', 'Europe');
      });
    });
  });

  it('Retrieves all countries when no code is provided', () => {
    cy.readFile('cypress/fixtures/allCountriesQuery.graphql').then(query => {
      cy.request({
        method: 'POST',
        url: GRAPHQL_URL,
        body: JSON.stringify({
          query
        }),
        headers: GRAPHQL_HEADERS,
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('countries');
        const countries = response.body.data.countries;
        expect(countries).to.be.an('array').that.is.not.empty;
      });
    });
  });
});