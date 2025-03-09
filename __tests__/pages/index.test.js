import { render } from '@testing-library/react';
import Home from '../../pages/index';
import * as nextRouter from 'next/router';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Home Page', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    nextRouter.useRouter.mockImplementation(() => ({
      push: mockPush
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to search-products page on mount', () => {
    render(<Home />);
    expect(mockPush).toHaveBeenCalledWith('/app/search-products');
  });
}); 