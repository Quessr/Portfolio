var m=Object.defineProperty;var i=(e,s)=>m(e,"name",{value:s,configurable:!0});import{H as r}from"./styled-components.browser.esm.6dcef41a.js";import{c as d}from"./clsx.m.256e9345.js";import{j as n,a as p}from"./jsx-runtime.026bdd70.js";import"./iframe.5a6b3e64.js";const o=i(({className:e,size:s,active:l,children:a,href:c})=>n(f,{href:c,className:d(e,`link-${s}`,l&&"link-active"),children:a}),"Link"),f=r.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-f5kjbs-0"})(["&.link-sm{","}&.link-md{","}&.link-lg{","}&.link-active{","}"],{height:"2.5rem",fontSize:"0.875rem",lineHeight:"1.25rem"},{height:"3rem",fontSize:"1rem",lineHeight:"1.5rem"},{height:"3.5rem",fontSize:"32px"},{textDecorationLine:"underline",textUnderlineOffset:"8px"}),t=o;try{o.displayName="Link",o.__docgenInfo={description:"",displayName:"Link",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Link/index.tsx#Link"]={docgenInfo:o.__docgenInfo,name:"Link",path:"src/components/atoms/Link/index.tsx#Link"})}catch{}const g={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Link from '.';

export default {
  title: 'Atoms / Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const API = (props: typeof Link) => {
  return (
    <div>
      <Link {...props}>Blog</Link>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div tw="flex gap-7">
      <Link href="https://quessr.tistory.com/" size="sm">
        small
      </Link>
      <Link href="https://quessr.tistory.com/" size="md" active>
        medium
      </Link>
      <Link href="https://quessr.tistory.com/" size="lg">
        large
      </Link>
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:17},startBody:{col:19,line:11},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:33},startBody:{col:21,line:19},endBody:{col:1,line:33}}}}},title:"Atoms / Link",component:t},v=i(e=>n("div",{children:n(t,{...e,children:"Blog"})}),"API"),x=i(()=>p(k,{children:[n(t,{href:"https://quessr.tistory.com/",size:"sm",children:"small"}),n(t,{href:"https://quessr.tistory.com/",size:"md",active:!0,children:"medium"}),n(t,{href:"https://quessr.tistory.com/",size:"lg",children:"large"})]}),"Sizes");var k=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1tdvo08-0"})({display:"flex",gap:"1.75rem"});const S=["API","Sizes"];export{v as API,x as Sizes,S as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories.1ab08338.js.map
