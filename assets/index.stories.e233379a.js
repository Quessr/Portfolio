var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.732dabc0.js";import{B as P}from"./index.7d6a8281.js";import"./iframe.800eb8f9.js";import"./styled-components.browser.esm.ebe042eb.js";import"./index.dbef9bb9.js";import"./index.1f3f13b4.js";import"./clsx.m.256e9345.js";import"./index.1d8dea4c.js";import"./index.54f83f35.js";import"./index.7827c8e7.js";import"./index.4c6e2902.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,S={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.e233379a.js.map
