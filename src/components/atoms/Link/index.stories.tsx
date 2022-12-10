import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Link, { LinkProps } from '.';

export default {
  title: 'Atoms / Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const API = (props: LinkProps) => {
  return (
    <div>
      <Link {...props}>Blog</Link>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div tw="flex gap-7">
      <Link to="https://quessr.tistory.com/" size="sm">
        small
      </Link>
      <Link to="https://quessr.tistory.com/" size="md" active>
        medium
      </Link>
      <Link to="https://quessr.tistory.com/" size="lg">
        large
      </Link>
    </div>
  );
};
