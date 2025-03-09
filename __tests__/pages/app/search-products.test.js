import { render, screen, waitFor } from '@testing-library/react';
import SearchProducts, { getServerSideProps } from '../../../pages/app/search-products';
import { useFilters } from '@/src/zustand/useFilters';
import { axiosInternal } from '@/src/lib/axiosInternal';

// Mock dependencies
jest.mock('@/src/zustand/useFilters', () => ({
  useFilters: jest.fn()
}));

jest.mock('@/src/lib/axiosInternal', () => ({
  axiosInternal: {
    get: jest.fn()
  }
}));

jest.mock('@/src/components/templates/SearchProducts', () => ({
  SearchProductsTemplate: ({ data }) => (
    <div data-testid="search-products-template">
      {data.map(product => (
        <div key={product.id} data-testid="product-item">
          {product.title}
        </div>
      ))}
    </div>
  )
}));

describe('SearchProducts Page', () => {
  const mockProducts = [
    { id: 1, title: 'Product 1', price: 100, category: 'mobile' },
    { id: 2, title: 'Product 2', price: 200, category: 'gaming' },
    { id: 3, title: 'Product 3', price: 300, category: 'audio' }
  ];

  beforeEach(() => {
    useFilters.mockImplementation(() => ({
      category: null,
      priceRange: [0, 3000],
      applyFilter: false
    }));

    axiosInternal.get.mockResolvedValue({
      data: { products: mockProducts }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getServerSideProps', () => {
    it('returns products on successful API call', async () => {
      const response = await getServerSideProps();
      expect(response).toEqual({
        props: {
          products: mockProducts,
          error: null
        }
      });
    });

    it('handles API errors gracefully', async () => {
      const error = new Error('API Error');
      axiosInternal.get.mockRejectedValueOnce(error);

      const response = await getServerSideProps();
      expect(response).toEqual({
        props: {
          products: [],
          error: 'API Error'
        }
      });
    });
  });

  describe('Client-side rendering', () => {
    it('renders products without filters', () => {
      render(<SearchProducts products={mockProducts} />);
      
      const template = screen.getByTestId('search-products-template');
      expect(template).toBeInTheDocument();
      
      const productItems = screen.getAllByTestId('product-item');
      expect(productItems).toHaveLength(3);
    });

    it('filters products by category', async () => {
      useFilters.mockImplementation(() => ({
        category: 'mobile',
        priceRange: [0, 3000],
        applyFilter: true
      }));

      axiosInternal.get.mockResolvedValueOnce({
        data: { products: [mockProducts[0]] }
      });

      render(<SearchProducts products={mockProducts} />);

      await waitFor(() => {
        const productItems = screen.getAllByTestId('product-item');
        expect(productItems).toHaveLength(1);
        expect(productItems[0]).toHaveTextContent('Product 1');
      });
    });

    it('filters products by price range', () => {
      useFilters.mockImplementation(() => ({
        category: null,
        priceRange: [0, 150],
        applyFilter: true
      }));

      render(<SearchProducts products={mockProducts} />);

      const productItems = screen.getAllByTestId('product-item');
      expect(productItems).toHaveLength(1);
      expect(productItems[0]).toHaveTextContent('Product 1');
    });

    it('handles empty product list', () => {
      render(<SearchProducts products={[]} />);
      
      const template = screen.getByTestId('search-products-template');
      expect(template).toBeInTheDocument();
      
      const productItems = screen.queryAllByTestId('product-item');
      expect(productItems).toHaveLength(0);
    });
  });
}); 