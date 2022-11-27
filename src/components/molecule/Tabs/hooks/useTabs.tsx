import { useContext } from 'react';

import { TabsContext } from '../context/Tabs.context';

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs 훅에 context가 제공되지 않았습니다.');
  }
  return context;
};

export default useTabs;
