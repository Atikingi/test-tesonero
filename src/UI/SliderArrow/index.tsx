import ArrowIcon from '../Icons/ArrowIcon';

type Props = {
  onClick: () => void;
};

const SliderArrow = ({ onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <ArrowIcon />
    </div>
  );
};

export default SliderArrow;
