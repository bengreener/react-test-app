import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./model/server');
// jest.mock('./model/server', () => {
//   return {
//     getData: function () {return 'Mock World'}
//   };
// })
jest.mock('./model/server-class');
// jest.mock('./model/server-class', () => {
//   return jest.fn().mockImplementation(() => {
//     return {'text': `It's a mock server client world`};
//   })
// });

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays text from server', () => {
  render(<App />);
  const pElement = screen.getByText(/Test World/i);
  // const pElement = screen.getByText(/Mock World/i);
  expect(pElement).toBeInTheDocument();
});

it('displays text from server class', () => {
  render(<App />);
  const pElement = screen.getByText(/It's a mock server client world/i);
  expect(pElement).toBeInTheDocument();
})