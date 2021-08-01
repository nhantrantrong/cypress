import { Pages } from '../../support/factories/PageFactory';


/**
 * 
 * @returns 
 */
export function setupTest(){
    const testEnv = Cypress.env('executedOn')
    Pages.HomePage.open(Cypress.env(testEnv).url);
}
