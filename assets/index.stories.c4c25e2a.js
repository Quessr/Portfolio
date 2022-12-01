var d=Object.defineProperty;var r=(i,t)=>d(i,"name",{value:t,configurable:!0});import{H as n}from"./styled-components.browser.esm.558ad7df.js";import{a as o,j as e,F as a}from"./jsx-runtime.8ed9044b.js";import"./iframe.843737c5.js";const C=r(({sectionTitle:i,title:t,items:l})=>o(m,{children:[e(p,{children:i}),o(S,{children:[t&&e(B,{children:t}),t&&e("hr",{}),l.map(u=>o(a,{children:[e(A,{children:u.subTitle}),Array.isArray(u.contents)?e(y,{children:u.contents.map(s=>e(_,{children:s}))}):e(D,{children:u.contents.trim()})]}))]})]}),"Section"),c=C;var m=n("div").withConfig({displayName:"Section___StyledDiv",componentId:"sc-h1j625-0"})({marginTop:"4rem",display:"grid",width:"100%",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}),p=n("div").withConfig({displayName:"Section___StyledDiv2",componentId:"sc-h1j625-1"})({fontSize:"1.875rem",lineHeight:"2.25rem"}),S=n("div").withConfig({displayName:"Section___StyledDiv3",componentId:"sc-h1j625-2"})({display:"grid",rowGap:"1rem"}),B=n("h4").withConfig({displayName:"Section___StyledH",componentId:"sc-h1j625-3"})({fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"500"}),A=n("h5").withConfig({displayName:"Section___StyledH2",componentId:"sc-h1j625-4"})({fontSize:"1.25rem",lineHeight:"1.75rem"}),y=n("ul").withConfig({displayName:"Section___StyledUl",componentId:"sc-h1j625-5"})({marginLeft:"1.5rem",marginRight:"1.5rem",display:"grid",listStyleType:"disc",rowGap:"0.25rem"}),_=n("li").withConfig({displayName:"Section___StyledLi",componentId:"sc-h1j625-6"})({fontSize:"1rem",lineHeight:"1.5rem"}),D=n("pre").withConfig({displayName:"Section___StyledPre",componentId:"sc-h1j625-7"})({marginLeft:"0.25rem",marginRight:"0.25rem",fontSize:"1rem",lineHeight:"1.5rem"});try{C.displayName="Section",C.__docgenInfo={description:"",displayName:"Section",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ subTitle?: string | undefined; contents: string | string[]; }[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecule/Section/index.tsx#Section"]={docgenInfo:C.__docgenInfo,name:"Section",path:"src/components/molecule/Section/index.tsx#Section"})}catch{}const w={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Section from '.';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecule / Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const API = () => {
  return (
    <div>
      <div tw="text-secondary">
        <Section
          sectionTitle="Projects"
          title="\uD300 \uD504\uB85C\uC81D\uD2B8 - Mocco"
          items={[
            {
              subTitle: '\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uAE30\uAC04',
              contents: \`2022\uB144 9\uC6D4 7\uC77C ~ 10\uC6D4 12\uC77C (\uD504\uB860\uD2B8\uC5D4\uB4DC 4, \uBC31\uC5D4\uB4DC 2)\`,
            },
            {
              subTitle: '\uD504\uB85C\uC81D\uD2B8 \uC18C\uAC1C',
              contents: \`'\uBAA8\uB450 \uBAA8\uC5EC\uC11C \uCF54\uB529'\uACFC \uBAA8\uC784\uC758 \uC21C \uC6B0\uB9AC\uB9D0\uC778 \uBAA8\uAF2C\uC9C0\uB97C \uD569\uCCD0 \uC11C\uBE44\uC2A4\uC758 \uC774\uB984\uC744 \uBAA8\uAF2C\uB85C \uC815\uD588\uC2B5\uB2C8\uB2E4.
\uBAA8\uAF2C\uB294 \uC628\uB77C\uC778 \uC0C1\uC5D0\uC11C \uAC19\uC740 \uCF54\uB529 \uC8FC\uC81C\uB97C \uACF5\uBD80\uD558\uB294 \uC2A4\uD130\uB514\uC6D0\uACFC \uC2A4\uD130\uB514\uB97C \uC9C4\uD589\uD558\uACE0, \uC11C\uB85C\uC758 \uACB0\uACFC\uBB3C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.\`,
            },
          ]}
        />
      </div>

      <div>
        <Section
          sectionTitle="About me"
          items={[
            {
              subTitle: 'Knowledgeable',
              contents: [
                'React\uB97C \uC774\uC6A9\uD55C SPA \uD074\uB77C\uC774\uC5B8\uD2B8 \uC571 \uAD6C\uCD95 \uBC0F \uAE30\uB2A5 \uAC1C\uBC1C.',
                'emotion \uACFC styled-components\uB97C \uC774\uC6A9\uD55C CSS-in-JS \uAC1C\uBC1C.',
                'Axios\uB97C \uC774\uC6A9\uD55C AJAX \uAD6C\uD604.',
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:15},endLoc:{col:1,line:53},startBody:{col:19,line:15},endBody:{col:1,line:53}}}}},title:"Molecule / Section",component:c},x=r(()=>o("div",{children:[e(h,{children:e(c,{sectionTitle:"Projects",title:"\uD300 \uD504\uB85C\uC81D\uD2B8 - Mocco",items:[{subTitle:"\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uAE30\uAC04",contents:"2022\uB144 9\uC6D4 7\uC77C ~ 10\uC6D4 12\uC77C (\uD504\uB860\uD2B8\uC5D4\uB4DC 4, \uBC31\uC5D4\uB4DC 2)"},{subTitle:"\uD504\uB85C\uC81D\uD2B8 \uC18C\uAC1C",contents:`'\uBAA8\uB450 \uBAA8\uC5EC\uC11C \uCF54\uB529'\uACFC \uBAA8\uC784\uC758 \uC21C \uC6B0\uB9AC\uB9D0\uC778 \uBAA8\uAF2C\uC9C0\uB97C \uD569\uCCD0 \uC11C\uBE44\uC2A4\uC758 \uC774\uB984\uC744 \uBAA8\uAF2C\uB85C \uC815\uD588\uC2B5\uB2C8\uB2E4.
\uBAA8\uAF2C\uB294 \uC628\uB77C\uC778 \uC0C1\uC5D0\uC11C \uAC19\uC740 \uCF54\uB529 \uC8FC\uC81C\uB97C \uACF5\uBD80\uD558\uB294 \uC2A4\uD130\uB514\uC6D0\uACFC \uC2A4\uD130\uB514\uB97C \uC9C4\uD589\uD558\uACE0, \uC11C\uB85C\uC758 \uACB0\uACFC\uBB3C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.`}]})}),e("div",{children:e(c,{sectionTitle:"About me",items:[{subTitle:"Knowledgeable",contents:["React\uB97C \uC774\uC6A9\uD55C SPA \uD074\uB77C\uC774\uC5B8\uD2B8 \uC571 \uAD6C\uCD95 \uBC0F \uAE30\uB2A5 \uAC1C\uBC1C.","emotion \uACFC styled-components\uB97C \uC774\uC6A9\uD55C CSS-in-JS \uAC1C\uBC1C.","Axios\uB97C \uC774\uC6A9\uD55C AJAX \uAD6C\uD604."]}]})})]}),"API");var h=n("div").withConfig({displayName:"indexstories___StyledDiv",componentId:"sc-1i19a8t-0"})({"--tw-text-opacity":"1",color:"rgb(var(--color-secondary) / var(--tw-text-opacity))"});const b=["API"];export{x as API,b as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories.c4c25e2a.js.map
