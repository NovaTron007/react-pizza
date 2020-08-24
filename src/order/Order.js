import React from "react";
import styled from "styled-components";
import { DialogFooter, DialogContent, ConfirmButton } from "../food-dialog/FoodDialog"; // import resueable styled components

// order container
const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: #fff;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 0px 0px 5px 5px grey;
`;

// order content area, style dialog content further
const OrderContent = styled(DialogContent)`
  height: 100%;
  padding: 20px;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? <OrderContent>Your order is empty</OrderContent> : <OrderContent>Found {orders.length}</OrderContent>}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
