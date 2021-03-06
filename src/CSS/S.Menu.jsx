import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideOutLeft } from 'react-animations';
import { Link } from 'react-router-dom';

const slideIn = keyframes`${slideInLeft}`;
const slideOut = keyframes`${slideOutLeft}`;

export const Main = styled.main`
  background-color: black;
  opacity: 0.9;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 50px;
  padding: 1em;
  height: 100vh;

  animation: 0.5s ${slideIn};

  @media(min-width: 1024px) {
    width: 20%;
  }
`;

export const LINK = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2em;
  margin: 3%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid blue;
    border-radius: 5px;
  }
`;
