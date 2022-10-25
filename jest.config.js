const testModulePath = [
<<<<<<< Updated upstream
  '**/minjman/after/challenge/**/*',
=======
  // '**/minjman/after/ch12/**/*',
>>>>>>> Stashed changes
  // '**/heeyeon/after/**/*',
  '**/publee/after/challenge/**/*',
  // '!**/publee/after/**/*.answer',
];

const addExtname = ext => testModulePath.map(path => `${path}${ext}`);

export default () => {
  return {
    rootDir: './',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['node_modules'],
    testEnvironment: 'node',
    collectCoverageFrom: addExtname('.js'), // coverage는 js 파일 기준
    testMatch: addExtname('.test.js'), // testMatch는 test 파일 기준
  };
};
