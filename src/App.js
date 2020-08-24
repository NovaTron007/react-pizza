import React, { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./menu/Menu";
import { FoodDialog } from "./food-dialog/FoodDialog";
import { Order } from "./order/Order";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  // initialise state
  const [openFood, setOpenFood] = useState();

  // send props to components
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
