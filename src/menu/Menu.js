import React from "react";
import styled from "styled-components";
import { foods } from "../data/FoodData"; // bring in data to loop
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"; // food grid styled components in FoodGrid file

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

// Menu contains food grid styled components
// Menu.js controls setOpenFood, pass in to change it's state
export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {/* loop the food names */}
            {foods.map(food => (
              <Food
                 img={food.img}
                 onClick={() => {
                 setOpenFood(food);// pass whole object to access all data
                }}
              >
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
