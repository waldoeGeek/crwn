// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const CategoryBodyContainer = styled.div`
  height: 9.5em;
  padding: 2em 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 28em;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:hover ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  &:hover ${CategoryBodyContainer} {
    opacity: 0.9;
  }
`;

export const CategoryHeading = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  font-family: 'Bebas Neue';
  font-size: 3em;
`;

export const CategoryPara = styled.p`
  font-weight: lighter;
  font-family: 'Square Peg';
  font-size: 3.2em;
  margin: 0.3em auto;
`;

// .category-container-main {
//   min-width: 30%;
//   height: 28em;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .category-body-container {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .category-body-container {
//     height: 9.5em;
//     padding: 2em 3em 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     background-color: white;
//     opacity: 0.7;
//     position: absolute;

//     h2 {
//       font-weight: bold;
//       text-transform: uppercase;
//       margin: 0 6px 0;
//       font-size: 22px;
//       color: #4a4a4a;
//       font-family: 'Bebas Neue';
//       font-size: 3em;
//     }

//     p {
//       font-weight: lighter;
//       // font-size: 16px;
//       font-family: 'Square Peg';
//       font-size: 3.2em;
//       margin: 0.3em auto;
//     }
//   }
// }
