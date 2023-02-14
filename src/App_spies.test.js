import { render, screen } from '@testing-library/react';
import App from './App';
import server from './model/server';
import ServerClass from './model/server-class';

const getDataSpy = jest.spyOn(server, 'getData').mockImplementation(() => {return 'Module mock text'});
const textSpy = jest.spyOn(ServerClass.prototype, 'text', 'get').mockImplementation(() => `Get mock server class text`);
const getTextSpy = jest.spyOn(ServerClass.prototype, 'getText').mockImplementation(() => 'Mock server class operation text');

beforeEach(() => {
  getDataSpy.mockClear();
  textSpy.mockClear();
}) 

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server', () => {
  render(<App />);
  const pElement = screen.getByText(/Module mock text/i);
  expect(pElement).toBeInTheDocument();
});

it('displays text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/Get mock server class text/i);
  expect(pElement).toBeInTheDocument();
})

it('displays functional text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/Mock server class operation text/i);
  expect(pElement).toBeInTheDocument();
})

it('calls server getData', () => {
  render(<App />);
  expect(getDataSpy).toBeCalled();
})

it('calls ServerClass.text', () => {
  render(<App />);
  expect(textSpy).toBeCalled();
})

it('calls ServerClass.getText', () => {
  render(<App />);
  expect(getTextSpy).toBeCalled();
})
