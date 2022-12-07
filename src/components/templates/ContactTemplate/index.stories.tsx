import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactTemplate, { ContactTemplateProps } from '.';

export default {
  title: 'Templates / ContactTemplate',
  component: ContactTemplate,
} as ComponentMeta<typeof ContactTemplate>;

export const API = (props: ContactTemplateProps) => {
  return (
    <div tw="bg-primary">
      <ContactTemplate {...props} />
    </div>
  );
};
