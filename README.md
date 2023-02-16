# React Test App

Various example mocks using React, Jest and, Testing Library to mock a Javascript module or class.

Examples of local mocks, defined in the test file, manual mocks uisng the \_\_mocks\_\_ subdirectory, and `jest.spyOn()` to spy on and override a module function, class getter, or class method.

## Configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Jest

Requires Jest resetMocks = false.

If Jest [resetMocks](https://jestjs.io/docs/mock-function-api#mockfnmockreset) = true tests that rely on the value returned by a mock function will fail.

By default create-react-app [configures resetMocks = true](https://github.com/facebook/create-react-app/blob/main/CHANGELOG-4.x.md#jest).
Add `"jest": {"resetMocks": false}` to package.json to override the create-react-apps configuration.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.