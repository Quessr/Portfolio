import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import LabelInput from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / LabelInput',
  component: LabelInput,
} as ComponentMeta<typeof LabelInput>;

export const API = (props: typeof LabelInput) => {
  return (
    <div tw="bg-primary px-4 py-4">
      <LabelInput name="Name" inputTitle="Name *" size="sm" {...props} />
    </div>
  );
};
