import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import PortfolioTemplate from '.';

export default {
  title: 'Templates / PortfolioTemplate',
  component: PortfolioTemplate,
} as ComponentMeta<typeof PortfolioTemplate>;

export const API = (props: typeof PortfolioTemplate) => {
  return <PortfolioTemplate {...props} />;
};
