import React from 'react';
import { TapPanelProps } from './TabPanel';

export interface TapPanelsprops extends React.PropsWithChildren {}

const TabPanels = ({ children }: TapPanelsprops) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TapPanelProps>, {
            ...child.props,
            index,
          });
        }
        return null;
      })}
    </div>
  );
};

export default TabPanels;
