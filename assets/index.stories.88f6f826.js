var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.551ea8c8.js";import{B as P}from"./index.b09163b8.js";import"./iframe.b1af0fde.js";import"./styled-components.browser.esm.c63f449c.js";import"./index.d806d2ac.js";import"./index.736b54ad.js";import"./index.c9a619a4.js";import"./clsx.m.256e9345.js";import"./index.d7ff9ab2.js";import"./index.fed2446f.js";import"./index.84133981.js";import"./index.6642b867.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,k={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:m},z=r(t=>i(m,{...t}),"API"),C=["API"];export{z as API,C as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories.88f6f826.js.map
