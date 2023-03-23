import * as S from './style';

type Props = {
  text: string;
  onClick?: () => void;
};

const UIButton = ({ text, onClick }: Props) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default UIButton;
