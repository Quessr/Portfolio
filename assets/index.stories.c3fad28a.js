var s=Object.defineProperty;var t=(o,n)=>s(o,"name",{value:n,configurable:!0});import{r as p,j as e}from"./jsx-runtime.87881f5b.js";import{B as a}from"./index.ebd5ee60.js";import"./iframe.e2b288a9.js";import"./styled-components.browser.esm.03dfa86e.js";import"./index.daedd0b7.js";import"./index.1fa3b17b.js";import"./clsx.m.256e9345.js";import"./index.d6303ee0.js";import"./index.446df534.js";import"./index.568fd355.js";import"./index.ce4732bf.js";const m=t(()=>(p.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss").then(o=>o.json()).then(o=>o.items)}),e(a,{})),"BlogPage"),r=m,j={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Templates / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Templates / BlogPage",component:r},A=t(o=>e(r,{...o}),"API"),_=["API"];export{A as API,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories.c3fad28a.js.map
