import { render, screen } from '@testing-library/react';
import App from './App';
// import server from './model/server';
// import ServerClass from './model/server-class';

// mock module
jest.mock('./model/server', () => {
  return {
    getText: function () {return 'local mock server getText()'}
  };
})

// mock class
// const mockGetText = jest.fn().mockImplementation(() => `local mock ServerClass.getText()`); // fails with ReferenceError: Cannot access 'mockGetText' before initialization
// failure possibly due to hoisting of mocks; this approach works in a demo (jest-sound-player) that doesn't use React/ create-react-app so missing some understanding of behaviour :-/ 
jest.mock('./model/server-class', () => {
  return jest.fn().mockImplementation(() => {
    return {
      'text': `local mock ServerClass.text`,
      // getText: function() {return `local mock ServerClass.getText()`}
      getText: jest.fn(() => `local mock ServerClass.getText()`)//,
      // getText: mockGetText // initialisation of mock function fails with ReferenceError: Cannot access 'mockGetText' before initialization
    };
  })
});

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server module', () => {
  render(<App />);
  const pElement = screen.getByText(/local mock server getText()/);
  expect(pElement).toBeInTheDocument();
});

it('displays text property from ServerClass', () => {
  render(<App />);
  const pElement = screen.getByText(/local mock ServerClass.text/);
  expect(pElement).toBeInTheDocument();
})

it('displays ServerClass.getText() method return value', () => {
  render(<App />);
  const pElement = screen.getByText(/local mock ServerClass.getText()/);
  expect(pElement).toBeInTheDocument();
})

// required configuration fails with ReferenceError: Cannot access 'mockGetText' before initialization
xit('calls class mockGetText', () => {
  render(<App />);
  expect(mockGetText).toBeCalled();
})