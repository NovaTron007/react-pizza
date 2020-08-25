import React from "react";
import styled from "styled-components";
import { DialogFooter, DialogContent, ConfirmButton } from "../food-dialog/FoodDialog"; // import resueable styled components
import { formatPrice } from "../data/FoodData"; // use to format price

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

const OrderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Orders: </OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
