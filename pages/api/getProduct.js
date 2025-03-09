import { axiosExternal } from "../../src/lib/axiosExternal";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const response = await axiosExternal.get(`/products/${id}`);
    const product = response.data.product;
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
}
