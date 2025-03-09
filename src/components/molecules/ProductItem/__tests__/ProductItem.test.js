import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductItem } from '../index';
import * as nextRouter from 'next/router';
import { useCurrentProduct } from '../../../../zustand/useCurrentProduct';
import { formatPrice } from '../../../../helpers/formatPrice';

// Mock the dependencies
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

jest.mock('../../../../zustand/useCurrentProduct', () => ({
  useCurrentProduct: jest.fn()
}));

jest.mock('../../../../helpers/formatPrice', () => ({
  formatPrice: jest.fn()
}));

describe('ProductItem', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    image: 'test-image.jpg',
    category: 'Test Category'
  };

  const mockPush = jest.fn();
  const mockSetCurrentProduct = jest.fn();

  beforeEach(() => {
    nextRouter.useRouter.mockImplementation(() => ({
      push: mockPush
    }));

    useCurrentProduct.mockImplementation(() => ({
      setCurrentProduct: mockSetCurrentProduct
    }));

    formatPrice.mockImplementation((price) => `$${price}`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    render(<ProductItem product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('truncates long product titles', () => {
    const longTitleProduct = {
      ...mockProduct,
      title: 'This is a very long product title that should be truncated at some point'
    };
    
    render(<ProductItem product={longTitleProduct} />);
    expect(screen.getByText('This is a very long product title that should b...')).toBeInTheDocument();
  });

  it('navigates to product page and sets current product when clicked', () => {
    render(<ProductItem product={mockProduct} />);
    
    const container = screen.getByRole('img').parentElement.parentElement;
    fireEvent.click(container);
    
    expect(mockSetCurrentProduct).toHaveBeenCalledWith(mockProduct);
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/app/product/[id]',
      query: { id: mockProduct.id }
    });
  });
}); 