import 'twin.macro';

import Tabs from '.';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabPanels from './TabPanels';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tabs',
  component: Tabs,
};

export const API = (props: typeof Tabs) => {
  return (
    <Tabs {...props}>
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
