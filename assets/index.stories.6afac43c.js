var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.67110c22.js";import{B as P}from"./index.637c3665.js";import"./iframe.091b98a2.js";import"./styled-components.browser.esm.df0a89dd.js";import"./index.eef1037a.js";import"./index.3139793b.js";import"./index.e1a03765.js";import"./clsx.m.256e9345.js";import"./index.b3eb0d48.js";import"./index.1e21a82f.js";import"./index.862ca324.js";import"./index.e4e6df2e.js";import"./index.f3f4c0f5.js";import"./index.5844e57a.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,C={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.6afac43c.js.map
