import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Container = styled.section`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 103px;
  background: ${color.bgLightBlue};

  @media (max-width: 1560px) {
    max-width: 1560px;
    align-items: center;
  }

  @media (${device.tablet}) {
    padding-top: 20px;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
`;

export const Title = styled.h2`
  max-width: 600px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: ${color.textDarkGray};

  @media (${device.tablet}) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Subtitle = styled.h5`
  margin-bottom: 48px;
  padding-left: 14px;
  padding-right: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textDarkGray};

  @media (${device.mobile}) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 89px;
  padding-right: 167px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (${device.tablet}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
