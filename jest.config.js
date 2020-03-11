module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '\\.test.ts?$',
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/dist',
        '<rootDir>/documentation',
    ]
}
