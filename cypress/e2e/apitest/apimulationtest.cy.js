import { GRAPHQL_URL, GRAPHQL_HEADERS } from '../../support/graphqlconfig';

describe('GraphQL Countries API', () => {
    it('Creates a new country and verifies it exists', () => {
        cy.readFile('cypress/fixtures/createCountryMutation.graphql').then(query => {
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
                const country = response.body.data.createCountry;

                // Assert new country details
                expect(country).to.have.property('code', 'AB');
                expect(country).to.have.property('name', 'Testcountry');
                expect(country).to.have.property('native', 'Testnative');
                expect(country).to.have.property('capital', 'Testcapital');
                expect(country).to.have.property('currency', 'TST');
                expect(country).to.have.property('languages').that.is.an('array').with.length(1);
                expect(country.languages[0]).to.have.property('code', 'TL');
                expect(country.languages[0]).to.have.property('name', 'Testlang');
                expect(country).to.have.property('continent');
                expect(country.continent).to.have.property('code', 'EU');
                expect(country.continent).to.have.property('name', 'TestEU');
            });
        });
    
    // Verify the country was created by querying it
   
        cy.readFile('cypress/fixtures/countryByCodeQuery.graphql').then(query => {
            const variables = {
                code: "AB"
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

                // Assert the created country details
                expect(country).to.have.property('code', 'AB');
                expect(country).to.have.property('name', 'Testcountry');
                expect(country).to.have.property('native', 'Testnative');
                expect(country).to.have.property('capital', 'Testcapital');
                expect(country).to.have.property('currency', 'TST');
                expect(country).to.have.property('languages').that.is.an('array').with.length(1);
                expect(country.languages[0]).to.have.property('code', 'TL');
                expect(country.languages[0]).to.have.property('name', 'Testlang');
                expect(country).to.have.property('continent');
                expect(country.continent).to.have.property('code', 'EU');
                expect(country.continent).to.have.property('name', 'TestEU');
            });
        });
    });
});
