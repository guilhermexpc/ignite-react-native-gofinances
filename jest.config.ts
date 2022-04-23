module.exports = { 
  preset: "jest-expo",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/android/",
    "/ios/"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "import 'jest-styled-components'"
  ]
}

// "jest": {
//   "preset": "jest-expo",
//   "setupFilesAfterEnv": [
//     "@testing-library/jest-native/extend-expect"
//   ]
// },