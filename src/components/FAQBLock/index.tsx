import DecorationLine from '../../UI/DecorationLine';
import FAQElement from '../../UI/FAQElement';
import StabilityIcon from '../../UI/Icons/StabilityIcon';
import LedIcon from '../../UI/Icons/LedIcon';
import LightsOffIcon from '../../UI/Icons/LightsOffIcon';
import SplitterIcon from '../../UI/Icons/SplitterIcon';
import PowerOffIcon from '../../UI/Icons/PowerOffIcon';

import { useState } from 'react';

import * as S from './style';

const FAQBlock = () => {
  const [idShowedFAQ, setIdShowedFAQ] = useState('');

  const showDescriptionHandler = (id: string) => {
    if (idShowedFAQ === id) {
      setIdShowedFAQ('');
    } else {
      setIdShowedFAQ(id);
    }
  };

  return (
    <S.Container>
      <S.LineWrapper>
        <DecorationLine />
      </S.LineWrapper>
      <S.Title>Lorem ipsum, dolor sit adipisicing elit.</S.Title>
      <S.Subtitle>Porro ab rerum omnis magnam eligendi error nobis dolore? </S.Subtitle>
      <S.Wrapper>
        <FAQElement
          id="faq1"
          icon={<StabilityIcon />}
          title="Lorem ipsum, dolor sit amet adipisicing elit."
          text="Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
          onClick={showDescriptionHandler}
          isActive={idShowedFAQ === 'faq1'}
        />
        <FAQElement
          id="faq2"
          icon={<LedIcon />}
          title={'Lorem ipsum, dolor sit amet adipisicing elit.'}
          text="Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
          onClick={showDescriptionHandler}
          isActive={idShowedFAQ === 'faq2'}
        />
        <FAQElement
          id="faq3"
          icon={<LightsOffIcon />}
          title={'Lorem ipsum, dolor sit amet adipisicing elit.'}
          text="Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
          onClick={showDescriptionHandler}
          isActive={idShowedFAQ === 'faq3'}
        />
        <FAQElement
          id="faq4"
          icon={<SplitterIcon />}
          title={'Lorem ipsum, dolor sit amet adipisicing elit.'}
          text="Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
          onClick={showDescriptionHandler}
          isActive={idShowedFAQ === 'faq4'}
        />
        <FAQElement
          id="faq5"
          icon={<PowerOffIcon />}
          title={'Lorem ipsum, dolor sit amet adipisicing elit.'}
          text="Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
          onClick={showDescriptionHandler}
          isActive={idShowedFAQ === 'faq5'}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default FAQBlock;
