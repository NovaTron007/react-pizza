import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./navbar/Navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./menu/Menu";

const GlobalStyle = createGlobalStyle`
 body{
   font-family: 'Open Sans', sans-serif;
   margin: 0;
 }
 h1,h2,h3{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Righteous', cursive;
 }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
