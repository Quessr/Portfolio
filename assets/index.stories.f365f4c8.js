var d=Object.defineProperty;var r=(t,e)=>d(t,"name",{value:e,configurable:!0});import{r as a,j as i}from"./jsx-runtime.202beed9.js";import{B as P}from"./index.8fad5803.js";import"./iframe.d7e5954c.js";import"./styled-components.browser.esm.c6a67696.js";import"./index.fddc2d10.js";import"./index.40d1ca40.js";import"./clsx.m.256e9345.js";import"./index.37ff117c.js";import"./index.df774490.js";import"./index.8acef0ea.js";import"./index.d619f9eb.js";const u=r(()=>{const[t,e]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(o=>o.json()).then(o=>o.items).then(o=>{const c=new DOMParser,l=o.map(s=>{var n,p;const g=(p=(n=c.parseFromString(s.description,"text/html").querySelector("body"))==null?void 0:n.textContent)!=null?p:"";return{...s,description:g}});e(l)})}),i(P,{items:t})},"BlogPage"),m=u,S={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=index.stories.f365f4c8.js.map
