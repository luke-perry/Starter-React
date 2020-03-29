module.exports = {
    restoreMocks: true,
    resetMocks: true,
    setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: { '^.*[.](scss|css|CSS)$': '<rootDir>/_stubs/CssStub.js' },
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.*[.](gif|svg|png|PNG)$': '<rootDir>/_stubs/ImageStub.js',
    },
    testPathIgnorePatterns: ['/node_modules/', '/acceptance'],
}
