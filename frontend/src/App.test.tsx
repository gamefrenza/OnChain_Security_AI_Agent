import { render, screen } from '@testing-library/react';
import App from './App';

test('renders On-chain Security AI Agent text', () => {
  render(<App />);
  const linkElement = screen.getByText(/On-chain Security AI Agent/i);
  expect(linkElement).toBeInTheDocument();
}); 