import { useState } from "react";

export function useOrders() {
  const [orders, setOrders] = useState([]); // initialise empty array for adding items

  return {
    orders,
    setOrders
  };
}
