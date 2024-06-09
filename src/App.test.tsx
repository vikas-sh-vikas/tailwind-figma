import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
type ModalProps = {
  isOpen: boolean;
  type: string;
  data?: {
    label: string;
    input: string;
  };
  closeModal: () => void;
  setData?: (data: string) => void;
};