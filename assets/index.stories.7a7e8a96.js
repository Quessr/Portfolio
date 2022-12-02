var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{H as n}from"./styled-components.browser.esm.d7924446.js";import{T as d}from"./index.8432a2dd.js";import{a as p,j as t}from"./jsx-runtime.0b36ddb6.js";import"./clsx.m.256e9345.js";import"./iframe.076c805e.js";const a=r(({name:e,textareaTitle:o,...i})=>p(c,{children:[t(m,{htmlFor:e,children:o}),t(d,{name:e,...i})]}),"LabelTextarea"),l=a;var c=n("div").withConfig({displayName:"LabelTextarea___StyledDiv",componentId:"sc-1f3ug6y-0"})({display:"grid"}),m=n("label").withConfig({displayName:"LabelTextarea___StyledLabel",componentId:"sc-1f3ug6y-1"})({marginBottom:"0.5rem","--tw-text-opacity":"1",color:"rgb(var(--color-secondary) / var(--tw-text-opacity))"});try{a.displayName="LabelTextarea",a.__docgenInfo={description:"",displayName:"LabelTextarea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},textareaTitle:{defaultValue:null,description:"",name:"textareaTitle",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},focusOutline:{defaultValue:null,description:"",name:"focusOutline",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecule/LabelTextarea/index.tsx#LabelTextarea"]={docgenInfo:a.__docgenInfo,name:"LabelTextarea",path:"src/components/molecule/LabelTextarea/index.tsx#LabelTextarea"})}catch{}const _={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import LabelTextarea from '.';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecule / LabelTextarea',
  component: LabelTextarea,
} as ComponentMeta<typeof LabelTextarea>;

export const API = (props: typeof LabelTextarea) => {
  return (
    <div tw="bg-primary px-4 py-4">
      <LabelTextarea
        name="Name"
        textareaTitle="Name *"
        size="md"
        focusOutline
        {...props}
      />
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:27},startBody:{col:19,line:15},endBody:{col:1,line:27}}}}},title:"Molecule / LabelTextarea",component:l},L=r(e=>t(u,{children:t(l,{name:"Name",textareaTitle:"Name *",size:"md",focusOutline:!0,...e})}),"API");var u=n("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-5eg87w-0"})({"--tw-bg-opacity":"1",backgroundColor:"rgb(var(--color-primary) / var(--tw-bg-opacity))",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem"});const v=["API"];export{L as API,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories.7a7e8a96.js.map
