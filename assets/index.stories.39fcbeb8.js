var l=Object.defineProperty;var e=(t,r)=>l(t,"name",{value:r,configurable:!0});import{r as p,j as a}from"./jsx-runtime.fb2ce5fa.js";import{B as g}from"./index.c69469df.js";import"./iframe.58f3daa8.js";import"./styled-components.browser.esm.4fdf6998.js";import"./index.88758efd.js";import"./index.41db80f9.js";import"./clsx.m.256e9345.js";import"./index.f204b1f4.js";import"./index.51c5f9b7.js";import"./index.d01e5d65.js";import"./index.e198131b.js";const d=e(()=>{const[t,r]=p.exports.useState([]);return p.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const m=new DOMParser;o.map(n=>{var s;const c=(s=m.parseFromString(n.description,"text/html").querySelector("body"))==null?void 0:s.textContent;return{...n,description:c}})})}),a(g,{items:t})},"BlogPage"),i=d,I={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Templates / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Templates / BlogPage",component:i},M=e(t=>a(i,{...t}),"API"),S=["API"];export{M as API,S as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories.39fcbeb8.js.map
