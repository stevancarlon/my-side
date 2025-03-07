import { axiosExternal } from "../../src/lib/axiosExternal";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { page } = req.query;

  try {
    const response = await axiosExternal.get(`/products?page=${page ?? 1}`);
    const products = response.data;
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
}
