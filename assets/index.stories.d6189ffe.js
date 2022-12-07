var s=Object.defineProperty;var t=(i,a)=>s(i,"name",{value:a,configurable:!0});import{H as e}from"./styled-components.browser.esm.9bda0b92.js";import{B as o}from"./index.9149db52.js";import{j as n,a as c}from"./jsx-runtime.d4a0144a.js";import"./clsx.m.256e9345.js";import"./iframe.c001c1d7.js";const l=t(()=>n(d,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"ArrowForwardIcon");var d=e("svg").withConfig({displayName:"ArrowForwardIcon___StyledSvg",componentId:"sc-l01tyl-0"})({height:"1.5rem",width:"1.5rem"});const u=t(()=>n(m,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})}),"CartIcon");var m=e("svg").withConfig({displayName:"CartIcon___StyledSvg",componentId:"sc-1sl58n5-0"})({height:"1.5rem",width:"1.5rem"});const p=t(()=>n(h,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})}),"HeartIcon");var h=e("svg").withConfig({displayName:"HeartIcon___StyledSvg",componentId:"sc-6nm1lq-0"})({height:"1.5rem",width:"1.5rem"});const v=t(()=>n(I,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"TrashIcon");var I=e("svg").withConfig({displayName:"TrashIcon___StyledSvg",componentId:"sc-1yaupbx-0"})({height:"1.5rem",width:"1.5rem"});const r=t(({icon:i,...a})=>n(g,{...a,children:i}),"IconButton");var g=e(o).withConfig({displayName:"IconButton___StyledButton",componentId:"sc-mve9mk-0"})({padding:"0px"});try{r.displayName="IconButton",r.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"outline"'},{value:'"ghost"'}]}},ellipse:{defaultValue:null,description:"",name:"ellipse",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"point"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Button/IconButton.tsx#IconButton"]={docgenInfo:r.__docgenInfo,name:"IconButton",path:"src/components/atoms/Button/IconButton.tsx#IconButton"})}catch{}const A={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Button from '.';
import ArrowForwardIcon from '../Icons/ArrowForwardIcon';
import CartIcon from '../Icons/CartIcon';
import HeartIcon from '../Icons/HeartIcon';
import TrashIcon from '../Icons/TrashIcon';
import IconButton from './IconButton';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const API = (props: typeof Button) => {
  return <Button {...props} />;
};

export const Sizes = () => {
  return (
    <div tw="flex gap-4">
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
    </div>
  );
};

export const Variants = () => {
  return (
    <div tw="flex gap-4">
      <Button variant="fill">fill</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export const Elipse = () => {
  return (
    <div tw="flex gap-4">
      <Button>default example</Button>
      <Button ellipse>ellipse example</Button>
    </div>
  );
};

export const Icon = () => {
  return (
    <div tw="flex gap-4">
      <Button leftIcon={<ArrowForwardIcon />}>leftIcon</Button>
      <Button rightIcon={<ArrowForwardIcon />}>rightIcon</Button>
      <Button leftIcon={<ArrowForwardIcon />} rightIcon={<ArrowForwardIcon />}>
        bothIcon
      </Button>
    </div>
  );
};

export const IconOnly = () => {
  return (
    <div tw="flex gap-4">
      <IconButton size="lg" variant="outline" icon={<HeartIcon />} />
      <IconButton size="lg" icon={<TrashIcon />} />
      <IconButton size="md" variant="ghost" icon={<CartIcon />} />
      <IconButton size="sm" icon={<ArrowForwardIcon />} />
      <IconButton size="sm" ellipse icon={<ArrowForwardIcon />} />
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:20},endLoc:{col:1,line:22},startBody:{col:19,line:20},endBody:{col:1,line:22}},sizes:{startLoc:{col:21,line:24},endLoc:{col:1,line:32},startBody:{col:21,line:24},endBody:{col:1,line:32}},variants:{startLoc:{col:24,line:34},endLoc:{col:1,line:42},startBody:{col:24,line:34},endBody:{col:1,line:42}},elipse:{startLoc:{col:22,line:44},endLoc:{col:1,line:51},startBody:{col:22,line:44},endBody:{col:1,line:51}},icon:{startLoc:{col:20,line:53},endLoc:{col:1,line:63},startBody:{col:20,line:53},endBody:{col:1,line:63}},"icon-only":{startLoc:{col:24,line:65},endLoc:{col:1,line:75},startBody:{col:24,line:65},endBody:{col:1,line:75}}}}},title:"Atoms / Button",component:o},N=t(i=>n(o,{...i}),"API"),M=t(()=>c(y,{children:[n(o,{size:"sm",children:"small"}),n(o,{size:"md",children:"medium"}),n(o,{size:"lg",children:"large"})]}),"Sizes"),D=t(()=>c(f,{children:[n(o,{variant:"fill",children:"fill"}),n(o,{variant:"outline",children:"outline"}),n(o,{variant:"ghost",children:"ghost"})]}),"Variants"),F=t(()=>c(B,{children:[n(o,{children:"default example"}),n(o,{ellipse:!0,children:"ellipse example"})]}),"Elipse"),O=t(()=>c(w,{children:[n(o,{leftIcon:n(l,{}),children:"leftIcon"}),n(o,{rightIcon:n(l,{}),children:"rightIcon"}),n(o,{leftIcon:n(l,{}),rightIcon:n(l,{}),children:"bothIcon"})]}),"Icon"),T=t(()=>c(_,{children:[n(r,{size:"lg",variant:"outline",icon:n(p,{})}),n(r,{size:"lg",icon:n(v,{})}),n(r,{size:"md",variant:"ghost",icon:n(u,{})}),n(r,{size:"sm",icon:n(l,{})}),n(r,{size:"sm",ellipse:!0,icon:n(l,{})})]}),"IconOnly");var y=e("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1ioyixe-0"})({display:"flex",gap:"1rem"}),f=e("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-1ioyixe-1"})({display:"flex",gap:"1rem"}),B=e("div").withConfig({displayName:"indexstories___StyledDiv3",componentId:"sc-1ioyixe-2"})({display:"flex",gap:"1rem"}),w=e("div").withConfig({displayName:"indexstories___StyledDiv4",componentId:"sc-1ioyixe-3"})({display:"flex",gap:"1rem"}),_=e("div").withConfig({displayName:"indexstories___StyledDiv5",componentId:"sc-1ioyixe-4"})({display:"flex",gap:"1rem"});const j=["API","Sizes","Variants","Elipse","Icon","IconOnly"];export{N as API,F as Elipse,O as Icon,T as IconOnly,M as Sizes,D as Variants,j as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories.d6189ffe.js.map
