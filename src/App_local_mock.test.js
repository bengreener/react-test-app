import { render, screen } from '@testing-library/react';
import App from './App';
// import server from './model/server';
// import ServerClass from './model/server-class';

// mock module
jest.mock('./model/server', () => {
  return {
    getData: function () {return 'Module text'}
  };
})

// mock class
jest.mock('./model/server-class', () => {
  return jest.fn().mockImplementation(() => {
    return {
      'text': `Get mock server class text`,
      // getText: function() {return `Mock server class operation text`}
      getText: jest.fn(() => `Mock server class operation text`)
    };
  })
});

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from module server', () => {
  render(<App />);
  const pElement = screen.getByText(/Module text/i);
  expect(pElement).toBeInTheDocument();
});

it('displays text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/Get mock server class text/i);
  expect(pElement).toBeInTheDocument();
})

it('displays operation text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/Mock server class operation text/i);
  expect(pElement).toBeInTheDocument();
})