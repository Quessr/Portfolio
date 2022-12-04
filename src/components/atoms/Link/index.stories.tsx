import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Link from '.';

export default {
  title: 'Atoms / Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const API = (props: typeof Link) => {
  return (
    <div>
      <Link {...props}>Blog</Link>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div tw="flex gap-7">
      <Link href="https://quessr.tistory.com/" size="sm">
        small
      </Link>
      <Link href="https://quessr.tistory.com/" size="md" active>
        medium
      </Link>
      <Link href="https://quessr.tistory.com/" size="lg">
        large
      </Link>
    </div>
  );
};
