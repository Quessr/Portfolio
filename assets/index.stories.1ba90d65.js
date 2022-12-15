var f=Object.defineProperty;var s=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as n,a as B,F as x,j as p}from"./jsx-runtime.92892e19.js";import{B as y,l as j}from"./index.9443e6cd.js";import"./iframe.ba196edb.js";import"./styled-components.browser.esm.c9ecf477.js";import"./index.846397e4.js";import"./clsx.m.256e9345.js";import"./index.627d11dc.js";import"./index.8618f676.js";import"./index.9f57c0a7.js";import"./index.42fede87.js";import"./index.c70f016c.js";import"./index.6f6998e8.js";import"./index.e03747cb.js";import"./index.d1616aea.js";import"./IconButton.3757abb4.js";import"./index.95a08275.js";const h=s(()=>{const[t,e]=n.exports.useState([]),[a,i]=n.exports.useState(!0);return n.exports.useEffect(()=>{i(!0),fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const g=new DOMParser,d=o.map(r=>{var m,c;const u=(c=(m=g.parseFromString(r.description,"text/html").querySelector("body"))==null?void 0:m.textContent)!=null?c:"",P=r.pubDate.split(" ")[0];return{...r,pubDate:P,description:u}});e(d),i(!1)})},[]),B(x,{children:[p(y,{items:t,loading:a}),a&&p("img",{src:j,alt:"loading"})]})},"BlogPage"),l=h,G={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.1ba90d65.js.map
