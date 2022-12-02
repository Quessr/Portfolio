import TabsProvider from './context/Tabs.context';

export interface TapsProps extends React.PropsWithChildren {
  index?: number;
  onChange?(index: number): void;
}

const Tabs = ({ children, ...rest }: TapsProps) => {
  return (
    <TabsProvider {...rest}>
      <div>{children}</div>
    </TabsProvider>
  );
};

export default Tabs;
