import styled from 'styled-components';
import { device } from '../../styles/mediaSizes';
import { color } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  display: flex;
  justify-content: center;
  background: rgb(245, 245, 245);
  background: linear-gradient(90deg, rgba(245, 245, 245, 1) 50%, rgba(248, 251, 255, 1) 50%);

  @media (max-width: 1560px) {
    flex-direction: column;
    background: ${color.bgPrimary};
  }

  @media (${device.tablet}) {
    flex-direction: column-reverse;
  }
`;
