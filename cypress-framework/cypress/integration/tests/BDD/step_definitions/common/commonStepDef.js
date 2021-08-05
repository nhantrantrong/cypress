import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { FixtureData, loadData } from "../../../../../support/factories/DataFactory";
import { setupTest } from '../../../TestController';

Given('Angluar Practice page has been launched', function () {
    setupTest()
    loadData(FixtureData.STUDENT).then(function (data) {
        this.studentData = data
    })
})