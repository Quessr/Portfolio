import 'twin.macro';

export interface TapListprops extends React.PropsWithChildren {}

const TabList = ({ children }: TapListprops) => {
  return <div tw="flex">{children}</div>;
};

export default TabList;
