import * as S from './style';

type Props = {
  children: string;
};

const ResponsiveText = ({ children }: Props) => {
  const getCurrentFontsize = () => {
    if (children.length > 100) return '16px';
    if (children.length > 50) return '18px';
    if (children.length > 30) return '22px';
    if (children.length > 10) return '24px';
  };

  return <S.Container fontSize={getCurrentFontsize()}>{children}</S.Container>;
};

export default ResponsiveText;
