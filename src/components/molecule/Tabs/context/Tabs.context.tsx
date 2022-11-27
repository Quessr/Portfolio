import React, { createContext, useState } from 'react';

export const TabContext = createContext();

const TabsProvider = ({ children }: React.PropsWithChildren) => {
  const indexState = useState(0)
  return <TabContext.Provider value={}>{children}</TabContext.Provider>;

};

export default TabsProvider;
