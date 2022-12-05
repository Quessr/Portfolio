import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Header from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules / Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const API = (props: typeof Header) => {
  return (
    <div tw="grid gap-y-5">
      <Header {...props} />
      <Header {...props} tw="bg-quarternary!" />
    </div>
  );
};
