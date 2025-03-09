import { render, screen, waitFor } from '@testing-library/react';
import Product from '../../../pages/app/product/[id]';
import { useCurrentProduct } from '@/src/zustand/useCurrentProduct';
import { axiosInternal } from '@/src/lib/axiosInternal';
import * as nextRouter from 'next/router';

// Mock dependencies
jest.mock('@/src/zustand/useCurrentProduct', () => ({
  useCurrentProduct: jest.fn()
}));

jest.mock('@/src/lib/axiosInternal', () => ({
  axiosInternal: {
    get: jest.fn()
  }
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

jest.mock('@/src/components/templates/Product', () => ({
  ProductTemplate: ({ product }) => (
    <div data-testid="product-template">
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <span>{product?.price}</span>
    </div>
  )
}));

describe('Product Page', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    category: 'mobile'
  };

  const mockSetCurrentProduct = jest.fn();

  beforeEach(() => {
    useCurrentProduct.mockImplementation(() => ({
      currentProduct: null,
      setCurrentProduct: mockSetCurrentProduct
    }));

    nextRouter.useRouter.mockImplementation(() => ({
      query: { id: '1' }
    }));

    axiosInternal.get.mockResolvedValue({
      data: mockProduct
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders product template with current product', () => {
    useCurrentProduct.mockImplementation(() => ({
      currentProduct: mockProduct,
      setCurrentProduct: mockSetCurrentProduct
    }));

    render(<Product />);
    
    expect(screen.getByTestId('product-template')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('fetches product data when no current product exists', async () => {
    render(<Product />);

    await waitFor(() => {
      expect(axiosInternal.get).toHaveBeenCalledWith('/api/getProduct', {
        params: { id: '1' }
      });
    });

    await waitFor(() => {
      expect(mockSetCurrentProduct).toHaveBeenCalledWith(mockProduct);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });

  it('does not fetch product if current product exists', () => {
    useCurrentProduct.mockImplementation(() => ({
      currentProduct: mockProduct,
      setCurrentProduct: mockSetCurrentProduct
    }));

    render(<Product />);

    expect(axiosInternal.get).not.toHaveBeenCalled();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('handles missing product ID in query params', () => {
    nextRouter.useRouter.mockImplementation(() => ({
      query: {}
    }));

    render(<Product />);
    expect(axiosInternal.get).not.toHaveBeenCalled();
  });

  it('handles API error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    axiosInternal.get.mockRejectedValueOnce(new Error('API Error'));

    render(<Product />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching product:', expect.any(Error));
    });

    consoleErrorSpy.mockRestore();
  });
}); 