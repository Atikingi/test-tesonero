import Slider from 'react-slick';
import styled from 'styled-components';
import { device } from '../../styles/mediaSizes';
import { color } from '../../styles/colors';

export const SliderWrapper = styled(Slider)`
  display: none;

  @media (${device.laptop}) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 25px;
`;

export const IconWrapper = styled.div`
  color: #2e3a59;

  &:hover {
    cursor: pointer;
    color: ${color.lightGreen};
  }
`;

export const NextArrowWrapper = styled.div`
  transform: rotate(270deg);
`;

export const PrevArrowWrapper = styled.div`
  transform: rotate(90deg);
`;
