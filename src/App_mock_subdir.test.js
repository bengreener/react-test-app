import { render, screen } from '@testing-library/react';
import App from './App';
import server from './model/server';
// import ServerClass from './model/server-class';
import ServerClass, { mockText, mockGetText } from './model/server-class';

// mock module
// use mock in __mocks__
jest.mock('./model/server');

// mock class
// use mock in __mocks__
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

it('calls mocked operation', () => {
  render(<App />);
  expect(mockGetText).toBeCalled();
  expect(mockGetText.mock.results[0].value).toBe('Mock server class operation text');
})