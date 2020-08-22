import React from 'react';
import styled from 'styled-components';

const OrderStyled = styled.div`
position: fixed;
right:0px;
top:48px;
width: 340px;
background-color: #fff;
height: calc(100% - 48px);
z-index: 10px;
box-shadow: 0px 0px 5px 5px grey;
`;

export function Order(){
  return <OrderStyled/>
}