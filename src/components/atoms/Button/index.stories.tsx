import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Button from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const API = (props: typeof Button) => {
  return <Button {...props} />;
};

export const Sizes = () => {
  return (
    <div tw="flex gap-4">
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
    </div>
  );
};

export const Variants = () => {
  return (
    <div tw="flex gap-4">
      <Button variant="fill">fill</Button>
      <Button variant="outline">outline</Button>
    </div>
  );
};
