import Slider from 'react-slick';

import Icon1 from '../../UI/Icons/Icon1';
import Icon2 from '../../UI/Icons/Icon2';
import Icon3 from '../../UI/Icons/Icon3';
import Icon4 from '../../UI/Icons/Icon4';
import SliderArrow from '../../UI/SliderArrow';
import ResponsiveText from '../RsponsiveText';

import { useRef } from 'react';

import * as S from './style';

const SliderMobile = () => {
  const sliderRef = useRef<Slider>(null);

  const onNextHandler = () => {
    sliderRef?.current?.slickNext();
  };

  const onPrevHandler = () => {
    sliderRef?.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <S.Container>
      <S.NextArrowWrapper onClick={onNextHandler}>
        <SliderArrow onClick={onNextHandler} />
      </S.NextArrowWrapper>
      <S.SliderWrapper {...settings} ref={sliderRef}>
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
        <S.Wrapper>
          <S.IconWrapper>
            <Icon4 />
          </S.IconWrapper>
          <ResponsiveText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ResponsiveText>
        </S.Wrapper>
      </S.SliderWrapper>
      <S.PrevArrowWrapper onClick={onPrevHandler}>
        <SliderArrow onClick={onPrevHandler} />
      </S.PrevArrowWrapper>
    </S.Container>
  );
};

export default SliderMobile;
