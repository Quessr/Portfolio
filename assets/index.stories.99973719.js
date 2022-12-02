var s=Object.defineProperty;var n=(t,r)=>s(t,"name",{value:r,configurable:!0});import{H as l}from"./styled-components.browser.esm.94c13907.js";import{I as e}from"./index.3e88b4e7.js";import{j as o,a as i}from"./jsx-runtime.bfb412a8.js";import"./clsx.m.256e9345.js";import"./iframe.6300972d.js";const x={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:17},startBody:{col:19,line:15},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:27},startBody:{col:21,line:19},endBody:{col:1,line:27}},"focus-outline":{startLoc:{col:28,line:29},endLoc:{col:1,line:40},startBody:{col:28,line:29},endBody:{col:1,line:40}}}}},title:"Atoms / Input",component:e},h=n(t=>o(e,{...t}),"API"),g=n(()=>i(c,{children:[o(e,{size:"sm",placeholder:"sm"}),o(e,{size:"md",placeholder:"md"}),o(e,{size:"lg",placeholder:"lg"})]}),"Sizes"),v=n(()=>i(p,{children:[o(e,{focusOutline:!0,placeholder:"white outline"}),o(a,{focusOutline:!0,placeholder:"black outline"})]}),"FocusOutline");var c=l("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-13kx604-0"})({display:"flex",flexDirection:"column",gap:"1rem"}),p=l("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-13kx604-1"})({display:"flex",gap:"1rem"}),a=l(e).withConfig({displayName:"indexstories___StyledInput",componentId:"sc-13kx604-2"})({":focus":{outlineColor:"#000 !important"}});const _=["API","Sizes","FocusOutline"];export{h as API,v as FocusOutline,g as Sizes,_ as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.99973719.js.map
