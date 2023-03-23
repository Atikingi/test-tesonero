import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div`
  max-width: 197px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  color: #2e3a59;

  &:hover {
    cursor: pointer;
    color: ${color.lightGreen};
  }
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${color.textDarkGray};
`;
