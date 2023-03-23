import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Button = styled.button`
  min-width: 117px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.lightGreen};
  box-shadow: 0 8px 16px rgba(0, 195, 104, 0.4);
  border-radius: 8px;
  border: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: ${color.textWhite};
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }

  @media (${device.laptopS}) {
    display: none;
  }
`;
