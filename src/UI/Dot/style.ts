import styled from 'styled-components';

export const CustomDot = styled.button`
  width: 8px;
  height: 8px;
  background: #a6abbd;
  border-radius: 32px;

  li.slick-active > div::before {
    background: red !important;
  }
  //li.slick-active > button::before {
  //  color: red !important;
  //}
`;
