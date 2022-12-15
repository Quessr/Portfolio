var f=Object.defineProperty;var s=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as n,a as B,F as x,j as p}from"./jsx-runtime.b963a1d6.js";import{B as y,l as j}from"./index.664b8c1f.js";import"./iframe.97825f62.js";import"./styled-components.browser.esm.c7c0cf5c.js";import"./index.786299c7.js";import"./clsx.m.256e9345.js";import"./index.8fc87b7c.js";import"./index.58fcb535.js";import"./index.1e6d3e56.js";import"./index.049acf4e.js";import"./index.71e965e4.js";import"./index.3400c63d.js";import"./index.6c2df435.js";import"./index.acaab0b4.js";import"./IconButton.cf29a213.js";import"./index.fb2ddc16.js";const h=s(()=>{const[t,e]=n.exports.useState([]),[a,i]=n.exports.useState(!0);return n.exports.useEffect(()=>{i(!0),fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const g=new DOMParser,d=o.map(r=>{var m,c;const u=(c=(m=g.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:m.textContent)!=null?c:"",P=r.pubDate.split(" ")[0];return{...r,pubDate:P,description:u}});e(d),i(!1)})},[]),B(x,{children:[p(y,{items:t,loading:a}),a&&p("img",{src:j,alt:"loading"})]})},"BlogPage"),l=h,G={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:l},T=s(t=>p(l,{...t}),"API"),$=["API"];export{T as API,$ as __namedExportsOrder,G as default};
//# sourceMappingURL=index.stories.a31c9af7.js.map
