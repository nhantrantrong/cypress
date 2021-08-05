const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: './reports/cucumber-report.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: '92'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Ecommerce Angular' },
            { label: 'Release', value: '1.2.3' },
            { label: 'Cycle', value: 'B11221.34321' },
            { label: 'Execution Start Time', value: 'start_time' },
            { label: 'Execution End Time', value: 'end_time' }
        ]
    }
});

