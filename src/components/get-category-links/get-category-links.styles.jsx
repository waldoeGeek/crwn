import styled, { keyframes } from 'styled-components';

export const LinksHeadingThree = styled.h3`
  margin: 0 auto;
  padding: 0 0.4em;
  &:hover {
    transform: translateY(-0.4em);
    transition: transform 0.51s cubic-bezier(0.99, 0.79, 0.63, 1.22);
  }
`;
