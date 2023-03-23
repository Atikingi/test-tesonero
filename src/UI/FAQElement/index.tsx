import React from 'react';
import ArrowIcon from '../Icons/ArrowIcon';

import * as S from './style';

type Props = {
  icon: React.ReactElement;
  id: string;
  title: string;
  text: string;
  onClick: (id: string) => void;
  isActive: boolean;
};

const FAQElement = ({ icon, id, title, text, onClick, isActive }: Props) => {
  return (
    <S.Wrapper>
      <S.Container id={id} onClick={() => onClick(id)}>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Title isActive={isActive}>{title}</S.Title>
        <S.ArrowWrapper isActive={isActive}>
          <ArrowIcon />
        </S.ArrowWrapper>
      </S.Container>
      <S.Description isActive={isActive}>{text}</S.Description>
    </S.Wrapper>
  );
};

export default FAQElement;
