import styled from "styled-components";
import { Title } from "../styles/title";

// FoodGrid component with 2 col grid
export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

// Food component now has access to title style
export const Food = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;

  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
  }
`;

// label with absolute to avoid stretching label
export const FoodLabel = styled(Title)`
  position: absolute;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;
