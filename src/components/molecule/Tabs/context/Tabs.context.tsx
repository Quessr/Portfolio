import React, { createContext, useState } from 'react';

export const TabsContext = createContext<{
  activeIndex: number;
  onChange(index: number): void;
} | null>(null);


const TabsProvider = ({ children }: React.PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onChange = (index: number) => setActiveIndex(index);
  return (
    <TabsContext.Provider value={{ activeIndex, onChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
