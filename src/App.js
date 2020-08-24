import React, { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./menu/Menu";
import { FoodDialog } from "./food-dialog/FoodDialog";
import { Order } from "./order/Order";

// import global styles
import { GlobalStyle } from "./styles/GlobalStyle";

// import hooks
import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";

function App() {
  // initialise state, import hook
  const openFood = useOpenFood();
  const orders = useOrders();

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
