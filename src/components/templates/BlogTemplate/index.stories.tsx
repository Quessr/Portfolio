import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogTemplate from '.';

export default {
  title: 'Templates / BlogTemplate',
  component: BlogTemplate,
} as ComponentMeta<typeof BlogTemplate>;

export const API = (props: typeof BlogTemplate) => {
  return <BlogTemplate {...props} />;
};
