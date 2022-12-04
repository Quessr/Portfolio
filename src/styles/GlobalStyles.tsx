import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  ':root': {
    '--color-primary': '240 142 128',
    '--color-secondary': '255 255 255',
    '--color-tertiay': '0 0 0',
    '--color-quarternary': '30 180 159',
  },
  body: {
    WebkitTapHighlightColor: theme`colors.primary`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
