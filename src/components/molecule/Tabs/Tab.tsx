import Button from '../../atoms/Button';
import useTabs from './hooks/useTabs';

export interface TapProps extends React.PropsWithChildren {
  index?: number;
}

const Tab = ({ index, ...rest }: TapProps) => {
  const { activeIndex, onChange } = useTabs();
  const onClick = () => {
    onChange(index ?? 0);
  };
  return <Button size="sm" variant="ghost" onClick={onClick} {...rest} />;
};

export default Tab;
