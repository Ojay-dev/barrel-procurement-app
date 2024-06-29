import shortUUID from "short-uuid";

// const shortUUID = new ShortUniqueId();

// In-memory storage for purchase orders
let orders = [
  {
    id: "1",
    item: "Laptop",
    itemCost: 1000,
    quantity: 10,
    paymentStatus: "unpaid",
    status: "pending",
    customerName: "Ajayi Crowder",
    customerAddress: "123 Main St",
  },
  {
    id: "2",
    item: "Monitor",
    itemCost: 20000,
    quantity: 5,
    paymentStatus: "paid",
    status: "shipped",
    customerName: "Bobby Wagner",
    customerAddress: "456 Elm St",
  },
];

// Helper function to find an order by ID
const findOrderById = (id) => orders.find((order) => order.id === id);

// GET all orders or a single order by ID
const getOrders = (req, res) => {
  const { id } = req.query;

  if (id) {
    const order = findOrderById(id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } else {
    res.status(200).json(orders);
  }
};

// POST a new order
const createOrder = (req, res) => {
  const id = orders.length ? orders[orders.length - 1].id + 1 : 1;
  const newOrder = { id, ...req.body };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

// PUT update an existing order by ID
const updateOrder = (req, res) => {
  const { id } = req.query;
  const indexToUpdate = orders.findIndex((order) => order.id === id);
  if (indexToUpdate !== -1) {
    orders[indexToUpdate] = { ...orders[indexToUpdate], ...req.body };
    res.status(200).json(orders[indexToUpdate]);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// DELETE an order by ID
const deleteOrder = (req, res) => {
  const { id } = req.query;
  const indexToDelete = orders.findIndex((order) => order.id === id);
  if (indexToDelete !== -1) {
    const deletedOrder = orders.splice(indexToDelete, 1);
    res.status(200).json(deletedOrder[0]);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// Main handler function
export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getOrders(req, res);
    case "POST":
      return createOrder(req, res);
    case "PUT":
      return updateOrder(req, res);
    case "DELETE":
      return deleteOrder(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
