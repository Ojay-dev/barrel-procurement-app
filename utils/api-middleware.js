import path from "path";
import { promises as fs } from "fs";

const dataStoreDir = path.join(process.cwd(), "data");
const dataFilePath = path.join(dataStoreDir, "orders.json");

// Middleware to read JSON data
export async function readOrdersFile() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading orders data:", error);
    return [];
  }
}

// Middleware to write JSON data
export async function writeOrdersFile(orders) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(orders, null, 2));
  } catch (error) {
    console.error("Error writing orders data:", error);
  }
}
