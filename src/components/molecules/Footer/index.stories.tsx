import { ComponentMeta } from '@storybook/react';

import Footer from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules / Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const API = (props: typeof Footer) => {
  return <Footer {...props} />;
};
