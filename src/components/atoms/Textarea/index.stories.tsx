import { ComponentMeta } from '@storybook/react';

import Textarea from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const API = (props: typeof Textarea) => {
  return <Textarea {...props} />;
};
