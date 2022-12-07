var l=Object.defineProperty;var e=(o,r)=>l(o,"name",{value:r,configurable:!0});import{r as p,j as a}from"./jsx-runtime.5b399fd4.js";import{B as g}from"./index.868e2ff9.js";import"./iframe.8337ed06.js";import"./styled-components.browser.esm.73d62701.js";import"./index.9bdfb3d0.js";import"./index.5bd8671d.js";import"./clsx.m.256e9345.js";import"./index.4ddfedd0.js";import"./index.ec084709.js";import"./index.10e7cb48.js";import"./index.d3bbaeed.js";const P=e(()=>{const[o,r]=p.exports.useState([]);return p.exports.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm").then(t=>t.json()).then(t=>t.items).then(t=>{const m=new DOMParser;t.map(n=>{var s;const c=(s=m.parseFromString(n.description,"text/html").querySelector("body"))==null?void 0:s.textContent;return{...n,description:c}})})}),a(g,{items:o})},"BlogPage"),i=P,I={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogPage from '.';

export default {
  title: 'Pages / BlogPage',
  component: BlogPage,
} as ComponentMeta<typeof BlogPage>;

export const API = (props: typeof BlogPage) => {
  return <BlogPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / BlogPage",component:i},M=e(o=>a(i,{...o}),"API"),S=["API"];export{M as API,S as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories.351aaf8e.js.map
