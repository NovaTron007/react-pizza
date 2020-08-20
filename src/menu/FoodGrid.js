import styled from "styled-components";
import { Title } from "../styles/title";

// FoodGrid component with 2 col grid
export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

// Food component now has access to title style
export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px grey;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

// label with absolute to avoid stretching label
export const FoodLabel = styled.div`
  position: absolute;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;
