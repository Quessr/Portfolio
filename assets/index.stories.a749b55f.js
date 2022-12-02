var d=Object.defineProperty;var n=(o,i)=>d(o,"name",{value:i,configurable:!0});import{H as r}from"./styled-components.browser.esm.4fe2e906.js";import{c as p}from"./clsx.m.256e9345.js";import{j as e,a as l}from"./jsx-runtime.95c4e594.js";import"./iframe.ee2598dd.js";const a=n(({className:o,focusOutline:i,size:s="md",...c})=>e(u,{className:p(o,`textarea-${s}`,i&&"textarea-focus_outline"),...c}),"Textarea"),u=r.textarea.withConfig({displayName:"Textarea__StyledTextarea",componentId:"sc-s8cwyc-0"})([""," &.textarea-sm{","}&.textarea-md{","}&.textarea-lg{","}&.textarea-focus_outline{","}"],{paddingLeft:"0.5rem",outline:"2px solid transparent",outlineOffset:"2px"},{minHeight:"50px"},{minHeight:"100px"},{minHeight:"200px"},{":focus":{outlineStyle:"solid",outlineOffset:"4px",outlineColor:"#fff"}}),t=a;try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{focusOutline:{defaultValue:null,description:"",name:"focusOutline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Textarea/index.tsx#Textarea"]={docgenInfo:a.__docgenInfo,name:"Textarea",path:"src/components/atoms/Textarea/index.tsx#Textarea"})}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Textarea from '.';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms / Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const API = (props: typeof Textarea) => {
  return <Textarea {...props} />;
};

export const Sizes = () => {
  return (
    <div tw="flex flex-col gap-4">
      <Textarea size="sm" placeholder="sm" />
      <Textarea size="md" placeholder="md" />
      <Textarea size="lg" placeholder="lg" />
    </div>
  );
};

export const FocusOutline = () => {
  return (
    <div tw="flex gap-4">
      <Textarea focusOutline placeholder="white outline" />
      <Textarea
        focusOutline
        tw="focus:outline-tertiay!"
        placeholder="black outline"
      />
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:17},startBody:{col:19,line:15},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:27},startBody:{col:21,line:19},endBody:{col:1,line:27}},"focus-outline":{startLoc:{col:28,line:29},endLoc:{col:1,line:40},startBody:{col:28,line:29},endBody:{col:1,line:40}}}}},title:"Atoms / Textarea",component:t},v=n(o=>e(t,{...o}),"API"),O=n(()=>l(m,{children:[e(t,{size:"sm",placeholder:"sm"}),e(t,{size:"md",placeholder:"md"}),e(t,{size:"lg",placeholder:"lg"})]}),"Sizes"),w=n(()=>l(x,{children:[e(t,{focusOutline:!0,placeholder:"white outline"}),e(f,{focusOutline:!0,placeholder:"black outline"})]}),"FocusOutline");var m=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-ai969f-0"})({display:"flex",flexDirection:"column",gap:"1rem"}),x=r("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-ai969f-1"})({display:"flex",gap:"1rem"}),f=r(t).withConfig({displayName:"indexstories___StyledTextarea",componentId:"sc-ai969f-2"})({":focus":{outlineColor:"rgb(var(--color-tertiay) / 1) !important"}});const z=["API","Sizes","FocusOutline"];export{v as API,w as FocusOutline,O as Sizes,z as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories.a749b55f.js.map
