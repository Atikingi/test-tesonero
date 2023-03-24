import Slider from 'react-slick';
import styled from 'styled-components';
import { device } from '../../styles/mediaSizes';
import { color } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
`;

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
  display: none;
  position: absolute;
  bottom: -57px;
  right: -6px;
  transform: rotate(270deg);

  @media (${device.laptop}) {
    display: block;
  }
`;

export const PrevArrowWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: -57px;
  left: -6px;
  transform: rotate(90deg);

  @media (${device.laptop}) {
    display: block;
  }
`;
