export function formatPrice(priceString) {
  const priceNumber = parseFloat(priceString);
  if (isNaN(priceNumber)) {
    throw new Error("Invalid price string");
  }
  return priceNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
