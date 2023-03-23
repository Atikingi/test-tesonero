import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.p<{ fontSize: string | undefined }>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: 150%;
  color: ${color.textDarkGray};
`;
