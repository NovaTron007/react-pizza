import React, { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./menu/Menu";
import { FoodDialog } from "./food-dialog/FoodDialog";
import { Order } from "./order/Order";

// import global styles
import { GlobalStyle } from "./styles/GlobalStyle";

// import hooks: to 'hook' into react state, w/o classes. Reuse stateful behaviour between components
import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";
import { useTitle } from "./hooks/useTitle";

function App() {
  // initialise state, import hook
  const openFood = useOpenFood(); // get opened food in popup
  const orders = useOrders(); // get orders

  useTitle({ ...openFood, ...orders }); // spread to pass data to hook

  // send props to components
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
