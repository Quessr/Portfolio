import React from 'react';

import GlobalStyle from '../src/styles/GlobalStyles';

export const parameters = {
  backgrounds: {
    default: 'pale orange',
    values: [
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'coral',
        value: '#F08E80',
      },
      {
        name: 'gray',
        value: '##F7F8F9',
      },
      {
        name: 'pale orange',
        value: '#fbcfb1a4',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
