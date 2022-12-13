var d=Object.defineProperty;var s=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.7979c991.js";import{B as P}from"./index.96ca59c0.js";import"./iframe.2ca452d4.js";import"./styled-components.browser.esm.2dc388f3.js";import"./index.8439c9d2.js";import"./index.ff1df786.js";import"./index.3257d584.js";import"./clsx.m.256e9345.js";import"./index.67f53b60.js";import"./index.0aee9c7c.js";import"./index.6e59ab12.js";import"./index.9b64af41.js";import"./index.d4a592cd.js";import"./index.3d1c05c6.js";const f=s(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(r=>{var n,p;const g=(p=(n=c.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"",u=r.pubDate.split(" ")[0];return{...r,pubDate:u,description:g}});e(l)})},[]),i(P,{items:t})},"BlogPage"),m=f,z={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.7c732f2c.js.map
