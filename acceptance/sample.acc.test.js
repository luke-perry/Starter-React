Feature('Sample Test')

Scenario('open my website', (I) => {
    I.amOnPage('/')
    I.see('Hello')
})
