import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders 21 cards', () => {
  render(<App />);
  const numberOfCards = screen.getAllByRole('card').length;
  expect(numberOfCards).toBe(21);
});
