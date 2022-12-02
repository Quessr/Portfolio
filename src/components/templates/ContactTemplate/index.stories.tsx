import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactTemplate from '.';

export default {
  title: 'Templates / ContactTemplate',
  component: ContactTemplate,
} as ComponentMeta<typeof ContactTemplate>;

export const API = (props: typeof ContactTemplate) => {
  return (
    <div tw="bg-primary">
      <ContactTemplate {...props} />
    </div>
  );
};
