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
jest.mock('./model/server-class', () => {
  return jest.fn().mockImplementation(() => {
    return {
      'text': `local mock ServerClass.text`,
      // getText: function() {return `local mock ServerClass.getText()`}
      getText: jest.fn(() => `local mock ServerClass.getText()`)
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