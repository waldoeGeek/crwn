import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Category = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const CategoryPre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoryHeading = styled(Link)`
  font-size: 1.2em;
  margin-bottom: 1.2em;
  text-transform: uppercase;
  cursor: pointer;
`;

// .category {
//   width: 90%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 2em;
// &-preview {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// }
//   &-heading--text {

//   }
// }
