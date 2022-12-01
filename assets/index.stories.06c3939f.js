var l=Object.defineProperty;var r=(i,t)=>l(i,"name",{value:t,configurable:!0});import{H as n}from"./styled-components.browser.esm.9a8a4f38.js";import{a as o,j as e,F as m}from"./jsx-runtime.0e567a07.js";import"./iframe.5c274dda.js";const c=r(({sectionTitle:i,title:t,items:s})=>o(d,{children:[e(p,{children:i}),o(g,{children:[t&&e(B,{children:t}),t&&e("hr",{}),s.map(u=>o(m,{children:[e(A,{children:u.subTitle}),Array.isArray(u.contents)?e(S,{children:u.contents.map(a=>e(_,{children:a}))}):e(y,{children:u.contents.trim()})]}))]})]}),"Section"),C=c;var d=n("div").withConfig({displayName:"organism___StyledDiv",componentId:"sc-17qv0kl-0"})({marginTop:"4rem",display:"grid",width:"100%",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}),p=n("div").withConfig({displayName:"organism___StyledDiv2",componentId:"sc-17qv0kl-1"})({fontSize:"1.875rem",lineHeight:"2.25rem"}),g=n("div").withConfig({displayName:"organism___StyledDiv3",componentId:"sc-17qv0kl-2"})({display:"grid",rowGap:"1rem"}),B=n("h4").withConfig({displayName:"organism___StyledH",componentId:"sc-17qv0kl-3"})({fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"500"}),A=n("h5").withConfig({displayName:"organism___StyledH2",componentId:"sc-17qv0kl-4"})({fontSize:"1.25rem",lineHeight:"1.75rem"}),S=n("ul").withConfig({displayName:"organism___StyledUl",componentId:"sc-17qv0kl-5"})({marginLeft:"1.5rem",marginRight:"1.5rem",display:"grid",listStyleType:"disc",rowGap:"0.25rem"}),_=n("li").withConfig({displayName:"organism___StyledLi",componentId:"sc-17qv0kl-6"})({fontSize:"1rem",lineHeight:"1.5rem"}),y=n("pre").withConfig({displayName:"organism___StyledPre",componentId:"sc-17qv0kl-7"})({marginLeft:"0.25rem",marginRight:"0.25rem",fontSize:"1rem",lineHeight:"1.5rem"});try{organism.displayName="organism",organism.__docgenInfo={description:"",displayName:"organism",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ subTitle?: string | undefined; contents: string | string[]; }[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organism/index.tsx#organism"]={docgenInfo:organism.__docgenInfo,name:"organism",path:"src/components/organism/index.tsx#organism"})}catch{}const T={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';

import Section from '.';

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Organism / Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const API = () => {
  return (
    <div>
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
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:14},endLoc:{col:1,line:47},startBody:{col:19,line:14},endBody:{col:1,line:47}}}}},title:"Organism / Section",component:C},w=r(()=>o("div",{children:[e(C,{sectionTitle:"Projects",title:"\uD300 \uD504\uB85C\uC81D\uD2B8 - Mocco",items:[{subTitle:"\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uAE30\uAC04",contents:"2022\uB144 9\uC6D4 7\uC77C ~ 10\uC6D4 12\uC77C (\uD504\uB860\uD2B8\uC5D4\uB4DC 4, \uBC31\uC5D4\uB4DC 2)"},{subTitle:"\uD504\uB85C\uC81D\uD2B8 \uC18C\uAC1C",contents:`'\uBAA8\uB450 \uBAA8\uC5EC\uC11C \uCF54\uB529'\uACFC \uBAA8\uC784\uC758 \uC21C \uC6B0\uB9AC\uB9D0\uC778 \uBAA8\uAF2C\uC9C0\uB97C \uD569\uCCD0 \uC11C\uBE44\uC2A4\uC758 \uC774\uB984\uC744 \uBAA8\uAF2C\uB85C \uC815\uD588\uC2B5\uB2C8\uB2E4.
\uBAA8\uAF2C\uB294 \uC628\uB77C\uC778 \uC0C1\uC5D0\uC11C \uAC19\uC740 \uCF54\uB529 \uC8FC\uC81C\uB97C \uACF5\uBD80\uD558\uB294 \uC2A4\uD130\uB514\uC6D0\uACFC \uC2A4\uD130\uB514\uB97C \uC9C4\uD589\uD558\uACE0, \uC11C\uB85C\uC758 \uACB0\uACFC\uBB3C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.`}]}),e(C,{sectionTitle:"About me",items:[{subTitle:"Knowledgeable",contents:["React\uB97C \uC774\uC6A9\uD55C SPA \uD074\uB77C\uC774\uC5B8\uD2B8 \uC571 \uAD6C\uCD95 \uBC0F \uAE30\uB2A5 \uAC1C\uBC1C.","emotion \uACFC styled-components\uB97C \uC774\uC6A9\uD55C CSS-in-JS \uAC1C\uBC1C.","Axios\uB97C \uC774\uC6A9\uD55C AJAX \uAD6C\uD604."]}]})]}),"API"),b=["API"];export{w as API,b as __namedExportsOrder,T as default};
//# sourceMappingURL=index.stories.06c3939f.js.map
