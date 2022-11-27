import { useContext } from 'react';

import { TabContext } from '../context/Tabs.context';

const useIndexState = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs 훅에 context가 제공되지 않았습니다.');
  }
  return context;
};

export default useIndexState;
