import DecorationLine from '../../UI/DecorationLine';
import Service from '../../UI/Service';
import Icon1 from '../../UI/Icons/Icon1';
import Icon2 from '../../UI/Icons/Icon2';
import Icon3 from '../../UI/Icons/Icon3';
import Icon4 from '../../UI/Icons/Icon4';
import SliderMobile from '../SliderMobile';

import * as S from './style';

const Services = () => {
  return (
    <S.Container>
      <S.LineWrapper>
        <DecorationLine />
      </S.LineWrapper>
      <S.Title>Lorem ipsum, dolor sit amet consectetur</S.Title>
      <S.SliderWrapper>
        <SliderMobile />
      </S.SliderWrapper>
      <div>
        <S.TopWrapper>
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon1 />}
          />
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon2 />}
          />
        </S.TopWrapper>
        <S.MiddleWrapper>
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon3 />}
          />
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon4 />}
          />
        </S.MiddleWrapper>
        <S.BottomWrapper>
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon1 />}
          />
          <Service
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<Icon2 />}
          />
        </S.BottomWrapper>
      </div>
    </S.Container>
  );
};

export default Services;
