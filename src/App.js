import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
   background-color: blue;
   font-family: 'Open Sans', sans-serif;
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
      <h1>Hello</h1>
    </>
  );
}

export default App;
