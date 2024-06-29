import { readOrdersFile, writeOrdersFile } from "@/utils/api-middleware";

// GET  a single order by ID
const getOrder = async (req, res) => {
  const { id } = req.query;

  const orders = await readOrdersFile();
  const order = orders.find((order) => parseInt(order.id) === parseInt(id));
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// PUT update an existing order by ID
const updateOrder = async (req, res) => {
  const { id } = req.query;

  const orders = await readOrdersFile();
  const index = orders.findIndex((order) => parseInt(order.id) === parseInt(id));
  if (index !== -1) {
    orders[index] = { ...orders[index], ...req.body };
    await writeOrdersFile(orders);
    res.status(200).json(orders[index]);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// DELETE an order by ID
const deleteOrder = async (req, res) => {
  const { id } = req.query;

  const orders = await readOrdersFile();
  const index = orders.findIndex((order) => parseInt(order.id) === parseInt(id));
  if (index !== -1) {
    const deletedOrder = orders.splice(index, 1)[0];
    await writeOrdersFile(orders);
    res.status(200).json(deletedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// Main handler function
export default function handler(req, res) {
  const { method } = req;
  console.log("method: ", method);

  switch (method) {
    case "GET":
      return getOrder(req, res);
    case "PUT":
      return updateOrder(req, res);
    case "DELETE":
      return deleteOrder(req, res);
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
