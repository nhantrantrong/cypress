import { setupTest } from '../../TestController';
import { loadData } from '../../../../support/factories/DataFactory';

before(function () {
    setupTest()
    loadData(FixtureData.STUDENT).then(function (data) {
        this.studentData = data
    })
})