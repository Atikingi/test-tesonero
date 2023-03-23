import * as S from './style';

type Props = {
  text: string;
  href: string;
};

const NavigationLink = ({ text, href }: Props) => {
  return <S.Link href={href}>{text}</S.Link>;
};

export default NavigationLink;
