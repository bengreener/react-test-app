import { render, screen } from '@testing-library/react';
import App from './App';
// import server from './model/server';
import ServerClass, { mockGetText } from './model/server-class';

// mock module using mock in __mocks__
jest.mock('./model/server');

// mock class using mock in __mocks__
jest.mock('./model/server-class');

// clear data from mocks before each test
beforeEach(() => {
  ServerClass.mockClear();
  mockGetText.mockClear();
})

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server module', () => {
  render(<App />);
  const pElement = screen.getByText(/__mocks__ server getText()/);
  expect(pElement).toBeInTheDocument();
});

it('displays text property from ServerClass', () => {
  render(<App />);
  const pElement = screen.getByText(/__mocks__ ServerClass.text/);
  expect(pElement).toBeInTheDocument();
})

it('displays ServerClass.getText() method return value', () => {
  render(<App />);
  const pElement = screen.getByText(/__mocks__ ServerClass.getText()/);
  expect(pElement).toBeInTheDocument();
})

it('calls mocked method', () => {
  render(<App />);
  expect(mockGetText).toBeCalled();
})