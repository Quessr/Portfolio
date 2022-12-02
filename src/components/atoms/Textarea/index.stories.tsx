import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

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

export const Sizes = () => {
  return (
    <div tw="flex flex-col gap-4">
      <Textarea size="sm" placeholder="sm" />
      <Textarea size="md" placeholder="md" />
      <Textarea size="lg" placeholder="lg" />
    </div>
  );
};

export const FocusOutline = () => {
  return (
    <div tw="flex gap-4">
      <Textarea focusOutline placeholder="white outline" />
      <Textarea
        focusOutline
        tw="focus:outline-tertiay!"
        placeholder="black outline"
      />
    </div>
  );
};
