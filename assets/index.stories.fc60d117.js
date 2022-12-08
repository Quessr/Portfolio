var u=Object.defineProperty;var n=(t,o)=>u(t,"name",{value:o,configurable:!0});import{B as e}from"./index.c77c7681.js";import{j as i}from"./jsx-runtime.e5c322d4.js";import"./styled-components.browser.esm.ed73a8eb.js";import"./index.4b2a6346.js";import"./index.a0fb88b3.js";import"./clsx.m.256e9345.js";import"./index.bad5057f.js";import"./index.0078c2b7.js";import"./index.b082d980.js";import"./index.19c72bcf.js";import"./iframe.8f6804a3.js";const g={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import BlogTemplate, { BlogTemplateProps } from '.';

export default {
  title: 'Templates / BlogTemplate',
  component: BlogTemplate,
  args: {
    items: [
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\\n\\nTypeScript Utily types 4\uAC00\uC9C0 \uC815\uB9AC\\n\\n\\nPartial<Type>\\nRequired<Type>\\nPick<Type, Keys>\\nOmit<Type, Keys>\\n\\n\xA0\\n\xA0\\n\xA0\\n\xA0\\n\xA0\\n\xA0\\nOmit <Type, Keys>\\n\\n\\n\\nexport interface ButtonProps\\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\\n  size?: 'sm' | 'md' | 'lg';\\n  variant?: 'fill' | 'outline' | 'ghost';\\n  ellipse?: boolean;\\n  leftIcon?: ReactNode;\\n  rightIcon?: ReactNode;\\n  colorScheme?: 'white' | 'point';\\n}\\n\\n\\nexport interface IconButtonProps\\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\\n  icon?: ReactNode;\\n}\\n\uB9CC\uB4E4\uC5B4\uB454 Button \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C key\uB97C \uAC00\uC838\uC640 \uC544\uC774\uCF58\uB9CC \uB4E4\uC5B4\uAC00\uB294 IconButton \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC0AC\uC6A9,\uAC00\uC838\uC624\uC9C0 \uC54A\uC73C\uB824\uB294 key\uC18D\uC131\uC740 Omit\uC758 \uB450\uBC88\uC9F8 \uC778\uC790\uC5D0 '|' \uD45C\uC2DC\uB85C \uAD6C\uBD84\uD558\uC5EC \uC81C\uAC70 \uD560 \uC218 \uC788\uB2E4.\\n\\n\uCC38\uC870: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\\n",
      },
    ],
  },
} as ComponentMeta<typeof BlogTemplate>;

export const API = (props: BlogTemplateProps) => {
  return <BlogTemplate {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:24},endLoc:{col:1,line:26},startBody:{col:19,line:24},endBody:{col:1,line:26}}}}},title:"Templates / BlogTemplate",component:e,args:{items:[{title:"Utility Types",pubDate:"2022-12-03 04:58:03",link:"https://quessr.tistory.com/2",thumbnail:"https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png",description:`

TypeScript Utily types 4\uAC00\uC9C0 \uC815\uB9AC


Partial<Type>
Required<Type>
Pick<Type, Keys>
Omit<Type, Keys>

\xA0
\xA0
\xA0
\xA0
\xA0
\xA0
Omit <Type, Keys>



export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline' | 'ghost';
  ellipse?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  colorScheme?: 'white' | 'point';
}


export interface IconButtonProps
  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
  icon?: ReactNode;
}
\uB9CC\uB4E4\uC5B4\uB454 Button \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C key\uB97C \uAC00\uC838\uC640 \uC544\uC774\uCF58\uB9CC \uB4E4\uC5B4\uAC00\uB294 IconButton \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC0AC\uC6A9,\uAC00\uC838\uC624\uC9C0 \uC54A\uC73C\uB824\uB294 key\uC18D\uC131\uC740 Omit\uC758 \uB450\uBC88\uC9F8 \uC778\uC790\uC5D0 '|' \uD45C\uC2DC\uB85C \uAD6C\uBD84\uD558\uC5EC \uC81C\uAC70 \uD560 \uC218 \uC788\uB2E4.

\uCC38\uC870: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
`}]}},h=n(t=>i(e,{...t}),"API"),A=["API"];export{h as API,A as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories.fc60d117.js.map
