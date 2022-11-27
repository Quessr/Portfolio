import Button from '../../atoms/Button';

export interface Tapprops extends React.PropsWithChildren {}

const Tab = ({ children }: Tapprops) => {
  return (
    <Button size="sm" variant="ghost">
      {children}
    </Button>
  );
};

export default Tab;
