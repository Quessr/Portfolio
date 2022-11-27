import TabsProvider from './context/Tabs.context';

export interface Tapprops extends React.PropsWithChildren {}

const Tabs = ({ children }: Tapprops) => {
  return (
    <TabsProvider>
      <div>{children}</div>
    </TabsProvider>
  );
};

export default Tabs;
