import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Card from '.';

export default {
  title: 'Molecules / Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const API = (props: typeof Card) => {
  return <Card {...props} />;
};
