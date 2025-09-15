// craco.config.js
export const jest = {
  configure: (jestConfig) => {
    jestConfig.setupFiles = ['<rootDir>/jest.setup.js']
    return jestConfig
  }
}
