import Header from '../../components/Header';
import Services from '../../components/Services';
import Reviews from '../../components/Reviews';
import FAQBLock from '../../components/FAQBLock';

import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <Header />
      <main>
        <Services />
        <S.FooterWrapper>
          <Reviews />
          <FAQBLock />
        </S.FooterWrapper>
      </main>
    </S.Container>
  );
};

export default MainPage;
