const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: ['./src/index.js'],
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary', 'lcov'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
}
