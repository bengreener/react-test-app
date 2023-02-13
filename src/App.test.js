import { render, screen } from '@testing-library/react';
import App from './App';
// import MockedClient from './model/client';

jest.mock('./model/client');
// jest.mock('./model/client', () => {
//   return {
//     getData: function () {return 'Mock World'}
//   };
// })

it('renders', () => {
  render(<App />);
  const appDivElement = document.querySelector('#app');
  expect(appDivElement).toBeInTheDocument();
});

it('displays help', () => {
  render(<App />);
  const pElement = screen.getByText(/Test World/i);
  // const pElement = screen.getByText(/Mock World/i);
  expect(pElement).toBeInTheDocument();
});