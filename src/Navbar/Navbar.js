import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../styles/colours";
import { Title } from "../styles/title";

const NavbarStyled = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${pizzaRed};
  padding: 10px;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #000;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Sliceline <span role="image">🍕</span>
      </Logo>
    </NavbarStyled>
  );
}
