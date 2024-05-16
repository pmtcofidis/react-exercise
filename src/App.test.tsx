import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Running Test for text', () => {
  test('Check text', () => {
    render(<App />);
    expect(screen.getAllByText(/React exercise App/i).length).toBe(1);
  });
});
