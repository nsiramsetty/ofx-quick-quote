import { render,fireEvent, screen } from '@testing-library/react';
import App from './../../App';

test('New Quote Form', () => {
  render(<App />);
  const newQuoteForm = screen.getByTestId('new-quote-form');
  expect(newQuoteForm).toBeInTheDocument();
});

test('Submit Button', () => {
    render(<App />);
    const submitButton = screen.getByTestId('get-quote-button');
    expect(submitButton).toBeInTheDocument();
  });

  test('Form Elements', () => {
    render(<App />);
    const fieldFirstName = screen.getByLabelText('First Name');
    expect(fieldFirstName).toBeInTheDocument();
    const fieldLastName = screen.getByLabelText('Last Name');
    expect(fieldLastName).toBeInTheDocument();
  });

test('Error on Submit & Validation', () => {
    render(<App />);
    const linkElement = screen.getByTestId('new-quote-form');
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('get-quote-button'));
    const newQuoteForm = screen.getByTestId('new-quote-form');
    expect(newQuoteForm).toHaveClass('was-validated');
    const fieldFirstName = screen.getByTestId('field-first-name');
    const errorFirstName = screen.getByText('Please Enter First Name.');
    expect(errorFirstName).toBeInTheDocument();
    expect(fieldFirstName).toContainElement(errorFirstName);
  });
