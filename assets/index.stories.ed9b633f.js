var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.aa19bda0.js";import{B as P}from"./index.1e6de908.js";import"./iframe.099533af.js";import"./styled-components.browser.esm.71e1d65c.js";import"./index.73841f71.js";import"./index.ca9363df.js";import"./clsx.m.256e9345.js";import"./index.03870fbb.js";import"./index.3e250428.js";import"./index.fedcf4fe.js";import"./index.8d241a6b.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,S={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:m},k=r(t=>i(m,{...t}),"API"),z=["API"];export{k as API,z as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories.ed9b633f.js.map
