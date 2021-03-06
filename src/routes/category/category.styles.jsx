import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3em 1em;
`;
export const CategoryTitle = styled.div`
  text-align: center;
  align-self: center;
`;

export const CategoryHeading = styled.h2`
  font-size: 4em;
  margin-bottom: 0;
`;

export const CategoryHR = styled.hr`
  width: 90%;
`;
export const CategoryLinks = styled.div`
  display: flex;
  font-size: 1em;
  flex-direction: row;
  justify-content: center;
`;

// export const CategoryLinksHeadingThree = styled.h3`
//   margin: 0 auto;
//   padding: 0 0.4em;
//   animation: fadeAnimation
//   &:hover {
//     transform: translateY(-0.4em);
//     transition: transform 0.51s cubic-bezier(0.99, 0.79, 0.63, 1.22);
//   }
// `;

// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 3em 1em;
// }

// .category__title {
//   text-align: center;
//   align-self: center;

//   h2 {
//     font-size: 4em;
//     margin-bottom: 0;
//   }
//   hr {
//     width: 90%;
//   }
// }

// .category__links {
//   display: flex;
//   font-size: 1em;
//   flex-direction: row;
//   justify-content: center;

//   h3 {
//     margin: 0 auto;
//     padding: 0 0.4em;
//     &:hover {
//       transform: translateY(-0.4em);
//       transition: transform 0.51s cubic-bezier(0.99, 0.79, 0.63, 1.22);
//     }
//   }
// }

// @keyframes fade {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
