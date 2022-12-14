var s=Object.defineProperty;var i=(o,e)=>s(o,"name",{value:e,configurable:!0});import{H as r}from"./styled-components.browser.esm.f47e0afb.js";import{L as t}from"./index.5d72d9ad.js";import{j as n,a as l}from"./jsx-runtime.3766eb46.js";import"./clsx.m.256e9345.js";import"./index.8464fbcf.js";import"./iframe.48724cce.js";const y={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:17},startBody:{col:19,line:11},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:33},startBody:{col:21,line:19},endBody:{col:1,line:33}}}}},title:"Atoms / Link",component:t},h=i(o=>n("div",{children:n(t,{...o,children:"Blog"})}),"API"),v=i(()=>l(m,{children:[n(t,{to:"https://quessr.tistory.com/",size:"sm",children:"small"}),n(t,{to:"https://quessr.tistory.com/",size:"md",active:!0,children:"medium"}),n(t,{to:"https://quessr.tistory.com/",size:"lg",children:"large"})]}),"Sizes");var m=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1tdvo08-0"})({display:"flex",gap:"1.75rem"});const f=["API","Sizes"];export{h as API,v as Sizes,f as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories.2681f9d0.js.map
