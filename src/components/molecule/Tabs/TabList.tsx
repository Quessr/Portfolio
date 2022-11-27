import React from 'react';
import 'twin.macro';

import { TapProps } from './Tab';

export interface TapListprops extends React.PropsWithChildren {}

const TabList = ({ children }: TapListprops) => {
  return (
    <div tw="flex">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TapProps>, {
            ...child.props,
            index,
          });
        }
        return null;
      })}
    </div>
  );
};

export default TabList;
