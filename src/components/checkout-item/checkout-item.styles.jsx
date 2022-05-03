import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
`;

export const CheckoutImg = styled.img`
  width: 15%;
`;

export const CheckoutName = styled.h2`
  width: 20%;
`;

export const CheckoutItemQuantity = styled.span`
  font-size: 30px;
`;

export const CheckoutDecrease = styled.span`
  font-size: 30px;
  cursor: pointer;
  font-weight: 900;
`;

export const CheckoutIncrease = styled.span`
  font-size: 30px;
  cursor: pointer;
  font-weight: 900;
`;

export const Quantity = styled.span`
  font-size: 30px;
  margin: 0 0.5em;
`;

export const CheckoutItemPrice = styled.span`
  font-size: 30px;
`;

export const CheckoutRemove = styled.span`
  font-size: 30px;
  cursor: pointer;
  font-weight: 900;
`;

// .checkout-item-container {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2em 0;
//   img {
//     width: 15%;
//   }
// }

// .checkout-item-name {
//   width: 20%;
// }

// .checkout-decrease,
// .checkout-increase,
// .checkout-remove,
// .checkout-item-price,
// .checkout-item-quantity {
//   font-size: 30px;
// }

// .checkout-decrease,
// .checkout-increase,
// .checkout-remove {
//   cursor: pointer;
//   font-weight: 900;
// }
// .bottom {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// }
// .quantity {
//   margin: 0 0.5em;
// }
