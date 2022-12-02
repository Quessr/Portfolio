import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Input from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const API = (props: typeof Input) => {
  return <Input {...props} />;
};

export const Sizes = () => {
  return (
    <div tw="flex flex-col gap-4">
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </div>
  );
};

export const FocusOutline = () => {
  return (
    <div tw="flex gap-4">
      <Input focusOutline placeholder="white outline" />
      <Input
        focusOutline
        tw="focus:outline-tertiay!"
        placeholder="black outline"
      />
    </div>
  );
};
