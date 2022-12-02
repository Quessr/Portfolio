import { ComponentMeta } from '@storybook/react';

import Caption from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atom / Caption',
  component: Caption,
} as ComponentMeta<typeof Caption>;

export const API = (props: typeof Caption) => {
  return <Caption {...props} />;
};
