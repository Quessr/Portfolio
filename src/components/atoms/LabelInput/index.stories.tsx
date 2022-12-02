import { ComponentMeta } from '@storybook/react';

import LabelInput from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / LabelInput',
  component: LabelInput,
} as ComponentMeta<typeof LabelInput>;

export const API = (props: typeof LabelInput) => {
  return <LabelInput {...props} />;
};
