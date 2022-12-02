import clsx from 'clsx';
import styled from 'styled-components';
import tw from 'twin.macro';

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
  return (
    <StyledTab
      className={clsx(index === activeIndex && 'active')}
      data-index={index}
      size="sm"
      variant="ghost"
      onClick={onClick}
      {...rest}
    />
  );
};

export default Tab;

const StyledTab = styled(Button)`
  &.active {
    ${tw`text-black`}
  }
  &:not(.active) {
    ${tw`text-slate-500`}
  }
`;
