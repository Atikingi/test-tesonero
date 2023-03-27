import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 704px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e7ebf0;

  &:last-child {
    border-bottom: none;
  }

  @media (${device.tablet}) {
    align-items: center;
  }

  @media (${device.mobile}) {
    max-width: 400px;
    min-width: 240px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media (${device.mobile}) {
    padding-bottom: 7px;
    align-items: flex-start;
  }
`;

export const Title = styled.h5<{ isActive: boolean }>`
  max-width: 473px;
  margin-left: 24px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.isActive ? color.lightGreen : color.textDarkGray)};
  cursor: pointer;

  @media (${device.tablet}) {
    max-width: 350px;
    min-width: 229px;
    font-size: 16px;
    line-height: 19px;
  }

  @media (${device.mobile}) {
    max-width: 300px;
    margin-left: 0;
  }
`;

export const ArrowWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isActive ? 'flex-start' : 'flex-end')}; ;
  flex: 1 1;
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
    padding-right: 20px;
  }
`;
