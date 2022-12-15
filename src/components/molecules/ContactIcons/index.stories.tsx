import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactIcons from '.';

export default {
  title: 'Molecules / ContactIcons',
  component: ContactIcons,
} as ComponentMeta<typeof ContactIcons>;

export const API = () => {
  return <ContactIcons />;
};
