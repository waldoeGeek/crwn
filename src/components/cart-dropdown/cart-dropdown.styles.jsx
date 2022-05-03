import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Total = styled.h2`
  text-align: right;
`;

export const EmptyCart = styled.span`
  text-align: center;
  font-size: 1.5em;
  margin-top: 1.5em;
`;
