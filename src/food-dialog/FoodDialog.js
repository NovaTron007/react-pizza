import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../menu/FoodGrid";
import { pizzaRed } from "../styles/colours";
import { Title } from "../styles/title";

// max-height set 100px of viewport minus 100px to create gap
// left calc half screen width minus 250px of div's with ie 500px
// display flex and direction set to col, to allow divs expand inside div using overflow
const Dialog = styled.div`
  width: 500px;
  background-color: #fff;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
`;

// export for reuse
export const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

// bring in Title component for further styling. Export to resuse button
export const ConfirmButton = styled(Title)`
  height: 20px;
  width: 200px;
  margin: 10px;
  color: #fff;
  background-color: ${pizzaRed};
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

// get image set in props
const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image:url(${img});`}
  background-position: center;
  background-size: cover;
`;

// imported FoodLabel from FoodGrid: extra styles for this component
const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

// receive states from App.js
export function FoodDialog({ openFood, setOpenFood }) {
  // when clicked on dialog shadow
  function close() {
    setOpenFood();
  }

  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent></DialogContent>
        <DialogFooter>
          <ConfirmButton>Order</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
}
