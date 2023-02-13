import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./model/server');
// jest.mock('./model/server', () => {
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