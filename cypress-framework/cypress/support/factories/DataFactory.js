
/**
 * Fixture filename constants declaration
 */
export const FixtureData = {
    STUDENT: 'student.json'
}

/**
 * Export functions for producing test data from fixture file
 * @param {*} fixtureName 
 * @returns 
 */
export function loadData(fixtureName) {
    return cy.fixture(fixtureName)
}

