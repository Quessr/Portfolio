export interface TapPanelsprops extends React.PropsWithChildren {}

const TabPanels = ({ children }: TapPanelsprops) => {
  return <div>{children}</div>;
};

export default TabPanels;