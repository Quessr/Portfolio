import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

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

  const onChange = useCallback(
    (index: number) => {
      if (onChangeProp) onChangeProp(index);
      else if (indexProp === undefined) setActiveIndex(index);
    },
    [indexProp, onChangeProp],
  );

  useEffect(() => {
    if (indexProp !== undefined) setActiveIndex(indexProp);
  }, [indexProp]);

  const value = useMemo(
    () => ({ activeIndex, onChange }),
    [activeIndex, onChange],
  );
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
