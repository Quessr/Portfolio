var a=Object.defineProperty;var t=(c,s)=>a(c,"name",{value:s,configurable:!0});import{H as e}from"./styled-components.browser.esm.2a90f584.js";import{B as o}from"./index.de2bb34d.js";import{j as n,a as l}from"./jsx-runtime.b1782dcd.js";import{I as i}from"./IconButton.3ca83ee4.js";import"./clsx.m.256e9345.js";import"./iframe.8cc72a20.js";const r=t(()=>n(d,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"ArrowForwardIcon");var d=e("svg").withConfig({displayName:"ArrowForwardIcon___StyledSvg",componentId:"sc-l01tyl-0"})({height:"1.5rem",width:"1.5rem"});const m=t(()=>n(p,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})}),"CartIcon");var p=e("svg").withConfig({displayName:"CartIcon___StyledSvg",componentId:"sc-1sl58n5-0"})({height:"1.5rem",width:"1.5rem"});const u=t(()=>n(h,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})}),"HeartIcon");var h=e("svg").withConfig({displayName:"HeartIcon___StyledSvg",componentId:"sc-6nm1lq-0"})({height:"1.5rem",width:"1.5rem"});const I=t(()=>n(v,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"TrashIcon");var v=e("svg").withConfig({displayName:"TrashIcon___StyledSvg",componentId:"sc-1yaupbx-0"})({height:"1.5rem",width:"1.5rem"});const A={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
      <Button size="xs">xsmall</Button>
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
`,locationsMap:{api:{startLoc:{col:19,line:20},endLoc:{col:1,line:22},startBody:{col:19,line:20},endBody:{col:1,line:22}},sizes:{startLoc:{col:21,line:24},endLoc:{col:1,line:33},startBody:{col:21,line:24},endBody:{col:1,line:33}},variants:{startLoc:{col:24,line:35},endLoc:{col:1,line:43},startBody:{col:24,line:35},endBody:{col:1,line:43}},elipse:{startLoc:{col:22,line:45},endLoc:{col:1,line:52},startBody:{col:22,line:45},endBody:{col:1,line:52}},icon:{startLoc:{col:20,line:54},endLoc:{col:1,line:64},startBody:{col:20,line:54},endBody:{col:1,line:64}},"icon-only":{startLoc:{col:24,line:66},endLoc:{col:1,line:76},startBody:{col:24,line:66},endBody:{col:1,line:76}}}}},title:"Atoms / Button",component:o},M=t(c=>n(o,{...c}),"API"),D=t(()=>l(g,{children:[n(o,{size:"xs",children:"xsmall"}),n(o,{size:"sm",children:"small"}),n(o,{size:"md",children:"medium"}),n(o,{size:"lg",children:"large"})]}),"Sizes"),F=t(()=>l(w,{children:[n(o,{variant:"fill",children:"fill"}),n(o,{variant:"outline",children:"outline"}),n(o,{variant:"ghost",children:"ghost"})]}),"Variants"),N=t(()=>l(y,{children:[n(o,{children:"default example"}),n(o,{ellipse:!0,children:"ellipse example"})]}),"Elipse"),j=t(()=>l(B,{children:[n(o,{leftIcon:n(r,{}),children:"leftIcon"}),n(o,{rightIcon:n(r,{}),children:"rightIcon"}),n(o,{leftIcon:n(r,{}),rightIcon:n(r,{}),children:"bothIcon"})]}),"Icon"),H=t(()=>l(f,{children:[n(i,{size:"lg",variant:"outline",icon:n(u,{})}),n(i,{size:"lg",icon:n(I,{})}),n(i,{size:"md",variant:"ghost",icon:n(m,{})}),n(i,{size:"sm",icon:n(r,{})}),n(i,{size:"sm",ellipse:!0,icon:n(r,{})})]}),"IconOnly");var g=e("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1ioyixe-0"})({display:"flex",gap:"1rem"}),w=e("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-1ioyixe-1"})({display:"flex",gap:"1rem"}),y=e("div").withConfig({displayName:"indexstories___StyledDiv3",componentId:"sc-1ioyixe-2"})({display:"flex",gap:"1rem"}),B=e("div").withConfig({displayName:"indexstories___StyledDiv4",componentId:"sc-1ioyixe-3"})({display:"flex",gap:"1rem"}),f=e("div").withConfig({displayName:"indexstories___StyledDiv5",componentId:"sc-1ioyixe-4"})({display:"flex",gap:"1rem"});const T=["API","Sizes","Variants","Elipse","Icon","IconOnly"];export{M as API,N as Elipse,j as Icon,H as IconOnly,D as Sizes,F as Variants,T as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories.ec77e979.js.map
