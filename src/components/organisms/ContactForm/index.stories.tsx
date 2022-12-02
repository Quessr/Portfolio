import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactForm from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Organisms / ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

export const API = (props: typeof ContactForm) => {
  return (
    <div tw="bg-primary px-6 py-6">
      <ContactForm {...props} />
    </div>
  );
};
