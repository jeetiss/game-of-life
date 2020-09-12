import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game grid', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});