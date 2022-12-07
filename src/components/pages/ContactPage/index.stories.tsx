import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactPage from '.';

export default {
  title: 'Pages / ContactPage',
  component: ContactPage,
} as ComponentMeta<typeof ContactPage>;

export const API = (props: typeof ContactPage) => {
  return <ContactPage {...props} />;
};
