import NavigationLink from '../../UI/NavigationLink';
import UIButton from '../../UI/UIBUtton';

import * as S from './style';

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <a href="#">
          <S.Logo />
        </a>
        <S.Navigation>
          <NavigationLink text="NavItem1" href="#" />
          <NavigationLink text="NavItem2" href="#" />
          <NavigationLink text="NavItem3" href="#" />
        </S.Navigation>
      </S.Wrapper>
      <UIButton text="Button" />
    </S.Container>
  );
};

export default Header;
