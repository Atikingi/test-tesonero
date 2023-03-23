import DecorationLine from '../../UI/DecorationLine';
import QuoteIcon from '../../UI/Icons/QuoteIcon';
import ResponsiveText from '../RsponsiveText';

import * as S from './style';

const Reviews = () => {
  return (
    <S.Container>
      <S.LineWrapper>
        <DecorationLine />
      </S.LineWrapper>
      <S.Title>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</S.Title>
      <S.ReviewsWrapper>
        <S.BigReviewContent>
          <S.BigAvatar>
            <S.BigAvatarImage src="/test-tesonero/images/small_avatar.webp" alt="avatar" />
          </S.BigAvatar>
          <S.TextWrapper>
            <S.LeftQuotes>
              <QuoteIcon />
              <QuoteIcon />
            </S.LeftQuotes>
            <ResponsiveText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
              cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi
              officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis
              magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis
              dolore?
            </ResponsiveText>
            <S.AuthorBig>Jane Doe</S.AuthorBig>
            <S.RightQuotes>
              <QuoteIcon />
              <QuoteIcon />
            </S.RightQuotes>
          </S.TextWrapper>
        </S.BigReviewContent>
        <S.SmallReviewsWrapper>
          <S.SmallReviewContent>
            <S.SmallAvatar />
            <S.TextWrapperSmall>
              <ResponsiveText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
                consectetur animi autem aliquid
              </ResponsiveText>
              <S.Author>Jane Doe</S.Author>
            </S.TextWrapperSmall>
          </S.SmallReviewContent>
          <S.SmallReviewContent>
            <S.SmallAvatar />
            <S.TextWrapperSmall>
              <ResponsiveText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
                consectetur animi autem aliquid
              </ResponsiveText>
              <S.Author>Jane Doe</S.Author>
            </S.TextWrapperSmall>
          </S.SmallReviewContent>
        </S.SmallReviewsWrapper>
      </S.ReviewsWrapper>
    </S.Container>
  );
};

export default Reviews;
