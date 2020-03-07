module.exports = {
  roots: ["<rootDir>/lib"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
