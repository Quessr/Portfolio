import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogHeader from '.';

export default {
  title: 'Molecules / BlogHeader',
  component: BlogHeader,
} as ComponentMeta<typeof BlogHeader>;

export const API = (props: typeof BlogHeader) => {
  return <BlogHeader {...props} />;
};
