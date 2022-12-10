var s=Object.defineProperty;var e=(o,i)=>s(o,"name",{value:i,configurable:!0});import{H as r}from"./styled-components.browser.esm.04c3a118.js";import{L as n}from"./index.8f38f6da.js";import{j as t,a as l}from"./jsx-runtime.f80bef51.js";import"./clsx.m.256e9345.js";import"./iframe.15b504c6.js";const u={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:17},startBody:{col:19,line:11},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:33},startBody:{col:21,line:19},endBody:{col:1,line:33}}}}},title:"Atoms / Link",component:n},y=e(o=>t("div",{children:t(n,{...o,children:"Blog"})}),"API"),h=e(()=>l(c,{children:[t(n,{to:"https://quessr.tistory.com/",size:"sm",children:"small"}),t(n,{to:"https://quessr.tistory.com/",size:"md",active:!0,children:"medium"}),t(n,{to:"https://quessr.tistory.com/",size:"lg",children:"large"})]}),"Sizes");var c=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1tdvo08-0"})({display:"flex",gap:"1.75rem"});const v=["API","Sizes"];export{y as API,h as Sizes,v as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories.cd5e8a3c.js.map
