import { render, screen } from '@testing-library/react';
import App from './App';
import server from './model/server';
import ServerClass from './model/server-class';

// spy on module method
const module_getTextSpy = jest.spyOn(server, 'getText').mockImplementation(() => {return 'spy server getText()'});
// spy on class property
const class_textSpy = jest.spyOn(ServerClass.prototype, 'text', 'get').mockImplementation(() => `spy ServerClass.text`);
// spy ob class method
const class_getTextSpy = jest.spyOn(ServerClass.prototype, 'getText').mockImplementation(() => 'spy ServerClass.getText()');

// clear data from mocks before each test
beforeEach(() => {
  module_getTextSpy.mockClear();
  class_textSpy.mockClear();
  class_getTextSpy.mockClear();
}) 

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server module', () => {
  render(<App />);
  const pElement = screen.getByText(/spy server getText()/);
  expect(pElement).toBeInTheDocument();
});

it('displays text property from ServerClass', () => {
  render(<App />);
  const pElement = screen.getByText(/spy ServerClass.text/i);
  expect(pElement).toBeInTheDocument();
})

it('displays ServerClass.getText() method return value', () => {
  render(<App />);
  const pElement = screen.getByText(/spy ServerClass.getText()/i);
  expect(pElement).toBeInTheDocument();
})

it('calls module getText', () => {
  render(<App />);
  expect(module_getTextSpy).toBeCalled();
})

it('calls ServerClass.text', () => {
  render(<App />);
  expect(class_textSpy).toBeCalled();
})

it('calls class getText', () => {
  render(<App />);
  expect(class_getTextSpy).toBeCalled();
})
