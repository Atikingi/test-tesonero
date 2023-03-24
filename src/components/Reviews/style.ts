import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/mediaSizes';

export const Container = styled.section`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 101px 83px 40px 100px;
  background: ${color.bgLightGray};

  @media (max-width: 1560px) {
    max-width: 1560px;
    align-items: center;
  }

  @media (${device.tablet}) {
    padding: 27px 16px 36px;
    background: ${color.bgPrimary};
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
`;

export const Title = styled.h2`
  margin-bottom: 48px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: ${color.textDarkGray};

  @media (${device.tablet}) {
    margin-bottom: 91px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 124px;

  @media (${device.tablet}) {
    gap: 35px;
  }
`;

export const BigAvatarImage = styled.img`
  display: none;

  @media (${device.tablet}) {
    display: block;
  }
`;

export const BigAvatar = styled.div`
  min-width: 212px;
  height: 212px;
  background: url('/test-tesonero/images/avatar.webp');
  filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.5));

  @media (${device.tablet}) {
    position: absolute;
    top: -48px;
    min-width: 97px;
    height: 97px;
    background: none;
  }
`;

export const SmallAvatar = styled.div`
  min-width: 125px;
  max-width: 125px;
  height: 125px;
  background: url('/test-tesonero/images/small_avatar.webp') top no-repeat;
  filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.5));

  @media (${device.mobile}) {
    min-width: 78px;
    max-width: 78px;
    background: url('/test-tesonero/images/avatar_mobile.webp') top no-repeat;
  }
`;

export const SmallReviewsWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (${device.tablet}) {
    flex-direction: column;
  }
`;

export const BigReviewContent = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (${device.tablet}) {
    position: relative;
    min-width: 288px;
    padding-top: 80px;
    padding-bottom: 15px;
    flex-direction: column;
    box-shadow: 0 8px 16px rgba(0, 195, 104, 0.24);
    border-radius: 32px;
  }
`;

export const SmallReviewContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;

  &:last-child {
    flex-direction: row;
  }

  @media (${device.tablet}) {
    flex-direction: row;

    &:last-child {
      flex-direction: row-reverse;
    }
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 546px;
  padding-left: 50px;

  @media (${device.tablet}) {
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
  }
`;

export const Author = styled.p`
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textDarkGray};

  @media (${device.tablet}) {
    text-align: left;
  }
`;

export const AuthorBig = styled(Author)`
  @media (${device.tablet}) {
    text-align: center;
  }
`;

export const TextWrapperSmall = styled.div`
  width: 100%;
  max-width: 242px;
  padding-top: 20px;
  text-align: left;

  @media (${device.tablet}) {
    padding-top: 0;
    text-align: left;
  }
`;

export const LeftQuotes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${color.lightGreen};

  @media (${device.tablet}) {
    top: -60px;
    left: 16px;
    color: ${color.lightGray};
  }
`;

export const RightQuotes = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${color.lightGreen};
  transform: rotate(180deg);

  @media (${device.tablet}) {
    top: -60px;
    right: 16px;
    bottom: auto;
    color: ${color.lightGray};
  }
`;
