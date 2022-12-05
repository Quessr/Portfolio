var c=Object.defineProperty;var t=(n,i)=>c(n,"name",{value:i,configurable:!0});import{H as a}from"./styled-components.browser.esm.5e284ef0.js";import{C}from"./index.48b86908.js";import{j as u}from"./jsx-runtime.55987a00.js";import"./index.fb401a0b.js";import"./clsx.m.256e9345.js";import"./iframe.7ac5293b.js";const s=t(({datas:n})=>u(d,{children:n==null?void 0:n.map(i=>u(C,{thumbnail:i.thumbnail,title:i.title,pubDate:i.pubDate,description:i.description}))}),"CardList"),o=s;var d=a("div").withConfig({displayName:"CardList___StyledDiv",componentId:"sc-184oh0c-0"})({display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"2.5rem",rowGap:"2.5rem"});try{s.displayName="CardList",s.__docgenInfo={description:"",displayName:"CardList",props:{datas:{defaultValue:null,description:"",name:"datas",required:!1,type:{name:"CardProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/CardList/index.tsx#CardList"]={docgenInfo:s.__docgenInfo,name:"CardList",path:"src/components/organisms/CardList/index.tsx#CardList"})}catch{}const B={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import CardList from '.';

export default {
  title: 'Organisms / CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

export const API = () => {
  return (
    <CardList
      datas={[
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
        {
          thumbnail:
            'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
          title: 'Tailwindcss / Customizing-colors',
          pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
          description:
            'Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC\\n\\n\\nTailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?\\n\uC0AC\uC6A9\uD55C \uC774\uC720\\n\uC0AC\uC6A9 \uBC29\uBC95\\n\uC88B\uC740\uC810\\n\\n \\n \\n \\n \\n \\nTailwindcss',
        },
      ]}
    />
  );
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:82},startBody:{col:19,line:11},endBody:{col:1,line:82}}}}},title:"Organisms / CardList",component:o},A=t(()=>u(o,{datas:[{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`},{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


Tailwindcss customizing-colors \uAE30\uB2A5 \uC774\uB780?
\uC0AC\uC6A9\uD55C \uC774\uC720
\uC0AC\uC6A9 \uBC29\uBC95
\uC88B\uC740\uC810

 
 
 
 
 
Tailwindcss`}]}),"API"),S=["API"];export{A as API,S as __namedExportsOrder,B as default};
//# sourceMappingURL=index.stories.45d1f982.js.map
