import React from 'react';

import * as S from './style';

type Props = {
  text: string;
  icon: React.ReactElement;
};

const Service = ({ text, icon }: Props) => {
  return (
    <S.Container>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Service;
