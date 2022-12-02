var c=Object.defineProperty;var o=(t,s)=>c(t,"name",{value:s,configurable:!0});import{H as l}from"./styled-components.browser.esm.8372ad56.js";import{c as a}from"./clsx.m.256e9345.js";import{j as e,a as r}from"./jsx-runtime.2657e4f0.js";import"./iframe.ee299b2c.js";const i=o(({className:t,size:s="md",focusOutline:p,...u})=>e(d,{className:a(t,`input-${s}`,p&&"input-focus_outline"),...u}),"Input"),d=l.input.withConfig({displayName:"Input__StyledInput",componentId:"sc-nv8qc6-0"})([""," &.input-sm{","}&.input-md{","}&.input-lg{","}&.input-focus_outline{","}"],{paddingLeft:"0.5rem",outline:"2px solid transparent",outlineOffset:"2px"},{height:"2.5rem"},{height:"3rem"},{height:"3.5rem"},{":focus":{outlineStyle:"solid",outlineOffset:"4px",outlineColor:"#fff"}}),n=i;try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{focusOutline:{defaultValue:null,description:"",name:"focusOutline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Input/index.tsx#Input"]={docgenInfo:i.__docgenInfo,name:"Input",path:"src/components/atoms/Input/index.tsx#Input"})}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Input from '.';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const API = (props: typeof Input) => {
  return <Input {...props} />;
};

export const Sizes = () => {
  return (
    <div tw="flex flex-col gap-4">
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </div>
  );
};

export const FocusOutline = () => {
  return (
    <div tw="flex gap-4">
      <Input focusOutline placeholder="white outline" />
      <Input
        focusOutline
        tw="focus:outline-black!"
        placeholder="black outline"
      />
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:17},startBody:{col:19,line:15},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:27},startBody:{col:21,line:19},endBody:{col:1,line:27}},"focus-outline":{startLoc:{col:28,line:29},endLoc:{col:1,line:40},startBody:{col:28,line:29},endBody:{col:1,line:40}}}}},title:"Atoms / Input",component:n},v=o(t=>e(n,{...t}),"API"),O=o(()=>r(m,{children:[e(n,{size:"sm",placeholder:"sm"}),e(n,{size:"md",placeholder:"md"}),e(n,{size:"lg",placeholder:"lg"})]}),"Sizes"),w=o(()=>r(f,{children:[e(n,{focusOutline:!0,placeholder:"white outline"}),e(I,{focusOutline:!0,placeholder:"black outline"})]}),"FocusOutline");var m=l("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-13kx604-0"})({display:"flex",flexDirection:"column",gap:"1rem"}),f=l("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-13kx604-1"})({display:"flex",gap:"1rem"}),I=l(n).withConfig({displayName:"indexstories___StyledInput",componentId:"sc-13kx604-2"})({":focus":{outlineColor:"#000 !important"}});const z=["API","Sizes","FocusOutline"];export{v as API,w as FocusOutline,O as Sizes,z as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories.0af382bb.js.map
