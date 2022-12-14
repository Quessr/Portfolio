var d=Object.defineProperty;var s=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.e44e32fe.js";import{B as P}from"./index.dde37eb6.js";import"./iframe.f453c38f.js";import"./styled-components.browser.esm.669478ac.js";import"./index.bfa19d72.js";import"./index.7e1d0c03.js";import"./index.c82e6546.js";import"./clsx.m.256e9345.js";import"./index.43452992.js";import"./index.942aee09.js";import"./index.a7365554.js";import"./index.e52032fb.js";import"./index.ebdcc737.js";import"./index.6c12f4b8.js";const f=s(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(r=>{var n,p;const g=(p=(n=c.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"",u=r.pubDate.split(" ")[0];return{...r,pubDate:u,description:g}});e(l)})},[]),i(P,{items:t})},"BlogPage"),m=f,z={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.7e1e5033.js.map
