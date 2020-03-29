exports.config = {
    tests: './acceptance/*acc.test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'http://localhost:8080',
            show: true,
        },
    },
    bootstrap: null,
    mocha: {},
    name: 'Starter-React',
    plugins: {
        retryFailedStep: {
            enabled: true,
        },
        screenshotOnFail: {
            enabled: true,
        },
    },
}
