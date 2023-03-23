import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Container = styled.header`
  height: 155px;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  margin-left: 87px;
  margin-right: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.bgPrimary};

  @media (${device.laptop}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (${device.laptopS}) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 90px;
`;

export const Logo = styled.div`
  width: 304px;
  height: 93px;
  background: url('/test-tesonero/images/logo.webp');

  @media (${device.tablet}) {
    width: 207px;
    height: 63px;
    background: url('/test-tesonero/images/logo_mobile.webp');
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (${device.laptop}) {
    gap: 15px;
  }

  @media (${device.laptopS}) {
    display: none;
  }
`;
