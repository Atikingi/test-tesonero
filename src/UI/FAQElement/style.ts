import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  position: relative;
  width: 704px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e7ebf0;

  &:last-child {
    border-bottom: none;
  }

  @media (${device.tablet}) {
    width: 440px;
    display: flex;
    align-items: center;
  }

  @media (${device.mobile}) {
    width: 280px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (${device.mobile}) {
    align-items: flex-start;
  }
`;

export const Title = styled.h5<{ isActive: boolean }>`
  margin-left: 24px;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.isActive ? color.lightGreen : color.textDarkGray)};
  cursor: pointer;

  @media (${device.tablet}) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (${device.mobile}) {
    margin-left: 0;
  }
`;

export const ArrowWrapper = styled.div<{ isActive: boolean }>`
  margin-left: 148px;
  transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'rotate(0)')};
  cursor: pointer;

  @media (${device.tablet}) {
    margin-left: 40px;
  }
`;

export const IconWrapper = styled.div`
  @media (${device.mobile}) {
    display: none;
  }
`;

export const Description = styled.p<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  max-width: 560px;
  margin-left: 64px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textDarkGray};

  @media (${device.tablet}) {
    margin-left: 0;
    line-height: 19px;
  }

  @media (${device.mobile}) {
    padding-bottom: 6px;
  }
`;
