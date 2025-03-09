import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../index';
import { useFilters } from '../../../../zustand/useFilters';
import * as nextRouter from 'next/router';

// Mock the zustand store
jest.mock('../../../../zustand/useFilters', () => ({
  useFilters: jest.fn()
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('SearchInput', () => {
  const mockSetProductSearch = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    useFilters.mockImplementation(() => ({
      productSearch: '',
      setProductSearch: mockSetProductSearch
    }));

    nextRouter.useRouter.mockImplementation(() => ({
      pathname: '/',
      push: mockPush
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default placeholder', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<SearchInput placeholder="Custom placeholder" />);
    expect(screen.getByPlaceholderText('Custom placeholder')).toBeInTheDocument();
  });

  it('updates search value on input change', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Search...');
    
    fireEvent.change(input, { target: { value: 'test search' } });
    expect(mockSetProductSearch).toHaveBeenCalledWith('test search');
  });

  it('navigates to search page on Enter key press when not on search page', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Search...');
    
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(mockPush).toHaveBeenCalledWith('/app/search-products');
  });

  it('does not navigate on Enter key press when already on search page', () => {
    nextRouter.useRouter.mockImplementation(() => ({
      pathname: '/app/search-products',
      push: mockPush
    }));

    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Search...');
    
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(mockPush).not.toHaveBeenCalled();
  });
}); 