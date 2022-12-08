var g=Object.defineProperty;var r=(t,e)=>g(t,"name",{value:e,configurable:!0});import{r as p,j as a}from"./jsx-runtime.e5c322d4.js";import{B as d}from"./index.c77c7681.js";import"./iframe.8f6804a3.js";import"./styled-components.browser.esm.ed73a8eb.js";import"./index.4b2a6346.js";import"./index.a0fb88b3.js";import"./clsx.m.256e9345.js";import"./index.bad5057f.js";import"./index.0078c2b7.js";import"./index.b082d980.js";import"./index.19c72bcf.js";const P=r(()=>{const[t,e]=p.exports.useState([]);return p.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const m=new DOMParser,c=o.map(s=>{var n;const l=(n=m.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent;return{...s,description:l}});e(c)})}),a(d,{items:t})},"BlogPage"),i=P,M={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:i},S=r(t=>a(i,{...t}),"API"),k=["API"];export{S as API,k as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories.605a90fb.js.map
