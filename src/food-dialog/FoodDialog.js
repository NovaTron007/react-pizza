import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../menu/FoodGrid";

// max-height set 100px of viewport minus 100px to create gap
// left calc half screen width minus 250px of div's with ie 500px
const Dialog = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
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
      </Dialog>
    </>
  ) : null;
}
