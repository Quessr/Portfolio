var d=Object.defineProperty;var s=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.96b1918f.js";import{B as P}from"./index.d1b49857.js";import"./iframe.2a864eb8.js";import"./styled-components.browser.esm.60d6e7a1.js";import"./index.2a4418b0.js";import"./clsx.m.256e9345.js";import"./index.62fcb351.js";import"./index.3e909b57.js";import"./index.e2f2f7d3.js";import"./index.5dadd610.js";import"./index.f12a63f6.js";import"./index.8da85ff8.js";import"./index.25f73c84.js";import"./index.3173e72d.js";const f=s(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(r=>{var n,p;const g=(p=(n=c.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"",u=r.pubDate.split(" ")[0];return{...r,pubDate:u,description:g}});e(l)})},[]),i(P,{items:t})},"BlogPage"),m=f,z={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:m},C=s(t=>i(m,{...t}),"API"),q=["API"];export{C as API,q as __namedExportsOrder,z as default};
//# sourceMappingURL=index.stories.5a2bbf5a.js.map
