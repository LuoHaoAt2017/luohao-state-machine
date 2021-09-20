
module.exports = {
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@mocks/(.*)$': '<rootDir>/test/mocks/$1',
  },
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  verbose: true,
  watchman: true,
};
