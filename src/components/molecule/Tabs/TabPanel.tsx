import useTabs from './hooks/useTabs';

export interface TapPanelProps extends React.PropsWithChildren {
  index?: number;
}

const TabPanel = ({ index, ...rest }: TapPanelProps) => {
  const { activeIndex } = useTabs();
  return <div data-index={index} hidden={activeIndex !== index} {...rest} />;
};

export default TabPanel;
