import Icon1 from '../../UI/Icons/Icon1';
import Icon2 from '../../UI/Icons/Icon2';
import Icon3 from '../../UI/Icons/Icon3';
import Icon4 from '../../UI/Icons/Icon4';
import ArrowIcon from '../../UI/Icons/ArrowIcon';
import ResponsiveText from '../RsponsiveText';

import * as S from './style';

const SliderMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slide: 'span',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <S.NextArrowWrapper>
        <ArrowIcon />
      </S.NextArrowWrapper>
    ),
    prevArrow: (
      <S.PrevArrowWrapper>
        <ArrowIcon />
      </S.PrevArrowWrapper>
    )
  };

  return (
    <S.SliderWrapper {...settings}>
      <S.Wrapper>
        <S.IconWrapper>
          <Icon1 />
        </S.IconWrapper>
        <ResponsiveText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ResponsiveText>
      </S.Wrapper>
      <S.Wrapper>
        <S.IconWrapper>
          <Icon2 />
        </S.IconWrapper>
        <ResponsiveText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ResponsiveText>
      </S.Wrapper>
      <S.Wrapper>
        <S.IconWrapper>
          <Icon3 />
        </S.IconWrapper>
        <ResponsiveText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ResponsiveText>
      </S.Wrapper>
      <S.Wrapper>
        <S.IconWrapper>
          <Icon4 />
        </S.IconWrapper>
        <ResponsiveText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ResponsiveText>
      </S.Wrapper>
    </S.SliderWrapper>
  );
};

export default SliderMobile;
