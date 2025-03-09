import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BootstrapPrimaryButton } from '../index';

describe('BootstrapPrimaryButton', () => {
  it('renders with the provided text', () => {
    render(<BootstrapPrimaryButton text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<BootstrapPrimaryButton text="Click me" onClick={handleClick} />);
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a button element', () => {
    render(<BootstrapPrimaryButton text="Click me" />);
    const button = screen.getByText('Click me');
    expect(button.tagName).toBe('BUTTON');
  });
}); 