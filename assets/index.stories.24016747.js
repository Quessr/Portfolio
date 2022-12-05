var s=Object.defineProperty;var o=(e,i)=>s(e,"name",{value:i,configurable:!0});import{H as r}from"./styled-components.browser.esm.4cc8f03e.js";import{L as n}from"./index.2c91208b.js";import{j as t,a as l}from"./jsx-runtime.93848c7a.js";import"./clsx.m.256e9345.js";import"./iframe.008d8a9f.js";const f={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:17},startBody:{col:19,line:11},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:33},startBody:{col:21,line:19},endBody:{col:1,line:33}}}}},title:"Atoms / Link",component:n},y=o(e=>t("div",{children:t(n,{...e,children:"Blog"})}),"API"),u=o(()=>l(c,{children:[t(n,{href:"https://quessr.tistory.com/",size:"sm",children:"small"}),t(n,{href:"https://quessr.tistory.com/",size:"md",active:!0,children:"medium"}),t(n,{href:"https://quessr.tistory.com/",size:"lg",children:"large"})]}),"Sizes");var c=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1tdvo08-0"})({display:"flex",gap:"1.75rem"});const k=["API","Sizes"];export{y as API,u as Sizes,k as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories.24016747.js.map
