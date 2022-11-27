export interface TapPanelprops extends React.PropsWithChildren {}

const TabPanel = ({ children }: TapPanelprops) => {
  return <div>{children}</div>;
};

export default TabPanel;