import { render, screen } from '@testing-library/react';
import App from './App';

test('The OFX Logo is Displayed', () => {
  render(<App />);
  const linkElement = screen.getByAltText('OFX Logo');
  expect(linkElement).toBeInTheDocument();
});


test('The Footer', () => {
  render(<App />);
  const linkElement = screen.getByTestId('copyright');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toContainHTML('Designed &amp; Developed by Naresh Siramsetty');
});

test('New Quote Form', () => {
  render(<App />);
  const linkElement = screen.getByTestId('new-quote-form');
  expect(linkElement).toBeInTheDocument();
});
