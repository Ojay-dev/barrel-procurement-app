import { readOrdersFile, writeOrdersFile } from "@/utils/api-middleware";

// GET all orders or a single order by ID
const getOrders = async (req, res) => {
  const orders = await readOrdersFile();
  res.status(200).json(orders);
};

// POST a new order
const createOrder = async (req, res) => {
  const orders = await readOrdersFile(dataFilePath);
  const newOrder = { ...req.body, id: orders.length + 1 };
  orders.push(newOrder);
  await writeOrdersFile(orders, dataFilePath);
  res.status(201).json(newOrder);
};

// Main handler function
export default function handler(req, res) {
  const { method } = req;
  console.log("method: ", method);

  switch (method) {
    case "GET":
      return getOrders(req, res);
    case "POST":
      return createOrder(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
