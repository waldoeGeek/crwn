import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductButton = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 0 1em;
  &:hover ${ProductImage} {
    opacity: 0.8;
  }
  &:hover ${ProductButton} {
    opacity: 0.85;
    display: flex;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const FooterPrice = styled.span`
  width: 10%;
`;

export const FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;
//   margin: 0 1em;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }
// }
