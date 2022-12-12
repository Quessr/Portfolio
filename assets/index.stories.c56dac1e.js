var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.b9308c5c.js";import{B as P}from"./index.9812499d.js";import"./iframe.52a19a67.js";import"./styled-components.browser.esm.b7684014.js";import"./index.6f83a0ee.js";import"./index.1b061d30.js";import"./index.caecc9ad.js";import"./clsx.m.256e9345.js";import"./index.bcd39acb.js";import"./index.3a94e982.js";import"./index.fecc0930.js";import"./index.ab4650fd.js";import"./index.c7060010.js";import"./index.615b36a5.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,C={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:m},D=r(t=>i(m,{...t}),"API"),b=["API"];export{D as API,b as __namedExportsOrder,C as default};
//# sourceMappingURL=index.stories.c56dac1e.js.map
