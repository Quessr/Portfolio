import React, { createContext, useEffect, useState } from 'react';

export const TabsContext = createContext<{
  activeIndex: number;
  onChange(index: number): void;
} | null>(null);

export interface TabsProviderProps extends React.PropsWithChildren {
  index?: number;
  onChange?(index: number): void;
}

const TabsProvider = ({
  children,
  index: indexProp,
  onChange: onChangeProp,
}: TabsProviderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(indexProp ?? 0);
  const onChange = (index: number) => {
    if (onChangeProp) onChangeProp(index);
    else if (indexProp === undefined) setActiveIndex(index);
  };
  useEffect(() => {
    if (indexProp !== undefined) setActiveIndex(indexProp);
  }, [indexProp]);
  return (
    <TabsContext.Provider value={{ activeIndex, onChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
