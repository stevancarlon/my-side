export const filterByPriceRange = (products, [minPrice, maxPrice]) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};
