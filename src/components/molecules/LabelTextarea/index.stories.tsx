import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import LabelTextarea from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules / LabelTextarea',
  component: LabelTextarea,
} as ComponentMeta<typeof LabelTextarea>;

export const API = (props: typeof LabelTextarea) => {
  return (
    <div tw="bg-primary px-4 py-4">
      <LabelTextarea
        name="Name"
        textareaTitle="Name *"
        size="md"
        focusOutline
        {...props}
      />
    </div>
  );
};
