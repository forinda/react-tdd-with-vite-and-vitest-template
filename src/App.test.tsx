import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Simple App test', () => {
  it('Should show app text', async () => {
    // ARRANGE
    render(<App />);
    // ACT
    await screen.findByRole('heading');
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('App')
  });
});
