var a=Object.defineProperty;var t=(n,l)=>a(n,"name",{value:l,configurable:!0});import{H as r}from"./styled-components.browser.esm.71e1d65c.js";import{T as e}from"./index.1d55ad40.js";import{j as o,a as i}from"./jsx-runtime.aa19bda0.js";import"./clsx.m.256e9345.js";import"./iframe.099533af.js";const h={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:17},startBody:{col:19,line:15},endBody:{col:1,line:17}},sizes:{startLoc:{col:21,line:19},endLoc:{col:1,line:27},startBody:{col:21,line:19},endBody:{col:1,line:27}},"focus-outline":{startLoc:{col:28,line:29},endLoc:{col:1,line:40},startBody:{col:28,line:29},endBody:{col:1,line:40}}}}},title:"Atoms / Textarea",component:e},g=t(n=>o(e,{...n}),"API"),T=t(()=>i(s,{children:[o(e,{size:"sm",placeholder:"sm"}),o(e,{size:"md",placeholder:"md"}),o(e,{size:"lg",placeholder:"lg"})]}),"Sizes"),v=t(()=>i(c,{children:[o(e,{focusOutline:!0,placeholder:"white outline"}),o(d,{focusOutline:!0,placeholder:"black outline"})]}),"FocusOutline");var s=r("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-ai969f-0"})({display:"flex",flexDirection:"column",gap:"1rem"}),c=r("div").withConfig({displayName:"indexstories___StyledDiv2",componentId:"sc-ai969f-1"})({display:"flex",gap:"1rem"}),d=r(e).withConfig({displayName:"indexstories___StyledTextarea",componentId:"sc-ai969f-2"})({":focus":{outlineColor:"rgb(var(--color-tertiay) / 1) !important"}});const _=["API","Sizes","FocusOutline"];export{g as API,v as FocusOutline,T as Sizes,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories.3a45f8f5.js.map
