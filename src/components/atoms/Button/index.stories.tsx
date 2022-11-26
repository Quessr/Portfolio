import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Button from '.';
import ArrowForwardIcon from '../Icons/ArrowForwardIcon';
import CartIcon from '../Icons/CartIcon';
import TrashIcon from '../Icons/TrashIcon';
import IconButton from './IconButton';

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
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export const Ellipse = () => {
  return (
    <div tw="flex gap-4">
      <Button>default example</Button>
      <Button ellipse={true}>ellipse example</Button>
    </div>
  );
};

export const Icon = () => {
  return (
    <div tw="flex gap-4">
      <Button leftIcon={<ArrowForwardIcon />}>leftIcon</Button>
      <Button rightIcon={<ArrowForwardIcon />}>rightIcon</Button>
      <Button leftIcon={<ArrowForwardIcon />} rightIcon={<ArrowForwardIcon />}>
        bothIcon
      </Button>
    </div>
  );
};

export const IconOnly = () => {
  return (
    <div tw="flex gap-4">
      <IconButton size="lg" icon={<TrashIcon />}/>
      <IconButton size="md" variant="ghost" icon={<CartIcon />}/>
      <IconButton size="sm" icon={<ArrowForwardIcon />}/>
    </div>
  );
};
