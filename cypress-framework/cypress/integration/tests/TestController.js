import { Pages } from "../../support/Factories/PageFactory";

/**
 * 
 * @returns 
 */
export function setupTest(){
    const testEnv = Cypress.env('executedOn')
    Pages.HomePage.open(Cypress.env(testEnv).url);
}
