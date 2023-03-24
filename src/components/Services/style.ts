import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px calc(50% - 960px) 133px;
  background: url('/test-tesonero/images/background1.webp') left 85% fixed no-repeat,
    url('/test-tesonero/images/background2.webp') right 10% fixed no-repeat,
    url('/test-tesonero/images/main_image.webp') 50% 67% no-repeat,
    linear-gradient(111.04deg, #e2e2e2 0.39%, rgba(255, 255, 255, 0) 86.46%);

  @media (${device.laptop}) {
    padding-left: 16px;
    padding-right: 16px;
    background: url('/test-tesonero/images/main_image.webp') 50% 67% no-repeat,
      linear-gradient(111.04deg, #e2e2e2 0.39%, rgba(255, 255, 255, 0) 86.46%);
  }

  @media (${device.tablet}) {
    padding-top: 65px;
    background: url('/test-tesonero/images/main_image_mobile.webp') top center no-repeat,
      ${color.bgPrimary};
  }
`;

export const LineWrapper = styled.div`
  margin-bottom: 22px;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const Title = styled.h1`
  margin-bottom: 69px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  text-transform: uppercase;
  color: ${color.textDarkGray};

  @media (${device.tablet}) {
    padding-top: 118px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 109px;
  margin-bottom: 72px;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 450px;
  margin-bottom: 61px;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 102px;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: block;
  width: 170px;

  @media (${device.laptop}) {
    display: block;
  }
`;

export const Image = styled.img``;
