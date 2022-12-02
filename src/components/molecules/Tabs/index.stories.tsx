import { useArgs } from '@storybook/client-api';
import 'twin.macro';

import Tabs from '.';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabPanels from './TabPanels';

// 👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules / Tabs',
  component: Tabs,
  args: {
    index: 0,
  },
};

export const API = () => {
  const [args, updateArgs] = useArgs();
  const onChange = (index: number) => {
    updateArgs({ index });
  };
  return (
    <Tabs index={args.index} onChange={onChange}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>one!</TabPanel>
        <TabPanel>two!</TabPanel>
        <TabPanel>three!</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
