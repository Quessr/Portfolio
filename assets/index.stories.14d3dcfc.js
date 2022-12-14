var f=Object.defineProperty;var s=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as n,a as B,F as x,j as a}from"./jsx-runtime.36e1dd74.js";import{B as y,l as j}from"./index.6426404d.js";import"./iframe.79673b98.js";import"./styled-components.browser.esm.2268c1cf.js";import"./index.e7a94e70.js";import"./clsx.m.256e9345.js";import"./index.e1ffce8c.js";import"./index.ade80d93.js";import"./index.a847c39a.js";import"./index.f77a44b8.js";import"./index.d50e21e0.js";import"./index.bb9b4b13.js";import"./index.2a520b2e.js";import"./index.860457d8.js";const h=s(()=>{const[t,e]=n.exports.useState([]),[p,i]=n.exports.useState(!0);return n.exports.useEffect(()=>{i(!0),fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const g=new DOMParser,d=o.map(r=>{var m,c;const u=(c=(m=g.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:m.textContent)!=null?c:"",P=r.pubDate.split(" ")[0];return{...r,pubDate:P,description:u}});e(d),i(!1)})},[]),B(x,{children:[a(y,{items:t,loading:p}),p&&a("img",{src:j,alt:"loading"})]})},"BlogPage"),l=h,E={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:l},O=s(t=>a(l,{...t}),"API"),G=["API"];export{O as API,G as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories.14d3dcfc.js.map
