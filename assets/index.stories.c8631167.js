var t=Object.defineProperty;var n=(s,u)=>t(s,"name",{value:u,configurable:!0});import{C as i}from"./index.8acef0ea.js";import{j as o}from"./jsx-runtime.202beed9.js";import"./styled-components.browser.esm.c6a67696.js";import"./index.d619f9eb.js";import"./index.37ff117c.js";import"./clsx.m.256e9345.js";import"./iframe.d7e5954c.js";const g={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:82},startBody:{col:19,line:11},endBody:{col:1,line:82}}}}},title:"Organisms / CardList",component:i},p=n(()=>o(i,{datas:[{thumbnail:"https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png",title:"Tailwindcss / Customizing-colors",pubDate:"Sat, 03 Dec 2022 23:50:59 +0900",description:`Tailwindcss customizing-colors \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC815\uB9AC


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

 
 
 
 
 
Tailwindcss`}]}),"API"),B=["API"];export{p as API,B as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories.c8631167.js.map