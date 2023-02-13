import { render, screen } from '@testing-library/react';
import App from './App';
// import ServerClass from './model/server-class';
// import ServerClass, { mockGetText } from './model/server-class';

// mock module
// use mock in __mocks__
jest.mock('./model/server');
// mock locally
// jest.mock('./model/server', () => {
//   return {
//     getData: function () {return 'Mock World'}
//   };
// })

// mock class
// use mock in __mocks__
// jest.mock('./model/server-class');
// mock locally
jest.mock('./model/server-class', () => {
  return jest.fn().mockImplementation(() => {
    return {
      'text': `It's a mock server client world`,
      getText: function() {return `It's a functional mock server client world`}
    };
  })
});

// if mock from __mocks__ is to be used in multiple tests reset before each test 
// beforeEach(() => {
//   ServerClass.mockClear();
//   mockGetText.mockClear();
// }) 

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server', () => {
  render(<App />);
  const pElement = screen.getByText(/Test World/i);
  expect(pElement).toBeInTheDocument();
});

it('displays text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/It's a mock server client world/i);
  expect(pElement).toBeInTheDocument();
})

it('displays functional text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/It's a functional mock server client world/i);
  expect(pElement).toBeInTheDocument();
})