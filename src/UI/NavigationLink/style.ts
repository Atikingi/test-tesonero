import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Link = styled.a`
  width: 117px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textLightGray};
  text-decoration: none;

  &:hover {
    color: ${color.textWhite};
    background: ${color.lightGreen};
    box-shadow: 0 8px 16px rgba(0, 195, 104, 0.4);
    border-radius: 8px;
    cursor: pointer;
  }

  &:nth-child(2) {
    margin-left: 70px;
  }

  &:last-child {
    margin-left: 61px;
  }

  @media (${device.laptop}) {
    width: 60px;

    &:nth-child(2) {
      margin-left: 0;
    }

    &:last-child {
      margin-left: 0;
    }
  }
`;
