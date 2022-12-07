var s=Object.defineProperty;var e=(t,n)=>s(t,"name",{value:n,configurable:!0});import{B as a}from"./index.7c4e0236.js";import{j as p}from"./jsx-runtime.d4a0144a.js";import"./styled-components.browser.esm.9bda0b92.js";import"./index.4ef2f34d.js";import"./index.9149db52.js";import"./clsx.m.256e9345.js";import"./index.6ee41212.js";import"./index.0957d6f2.js";import"./index.055f9950.js";import"./index.d1abf0ff.js";import"./iframe.c001c1d7.js";const y={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
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
          '\\n<p><figure class="imageblock floatLeft" data-origin-width="1640" data-origin-height="2360" data-ke-mobilestyle="alignCenter"><span data-url="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" data-lightbox="lightbox" data-alt=""><img src="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW4LBv%2FbtrSHNIAFci%2Fkd8VK92Vhnut9F4lSJvjT1%2Fimg.png" width="316" height="455" data-filename="\u110C\u1166\u1106\u1169\u11A8 \u110B\u1165\u11B9\u110B\u1173\u11B7 3.png" data-ke-mobilestyle="alignCenter"></span></figure></p>\\n<h3 data-ke-size="size23">\\n<span><b><span>TypeScript Utily types 4\uAC00\uC9C0 \uC815\uB9AC<br><br><br></span></b></span><span><b><span></span></b></span>\\n</h3>\\n<ul data-ke-list-type="circle">\\n<li><span>Partial&lt;Type&gt;<br><br></span></li>\\n<li><span><span>Required&lt;Type&gt;<br><br></span></span></li>\\n<li><span><span><span>Pick&lt;Type, Keys&gt;<br><br></span></span></span></li>\\n<li><span>Omit&lt;Type, Keys&gt;</span></li>\\n</ul>\\n<p data-ke-size="size16">\xA0</p>\\n<p data-ke-size="size16">\xA0</p>\\n<p data-ke-size="size16">\xA0</p>\\n<p data-ke-size="size16">\xA0</p>\\n<h4 data-ke-size="size20">\xA0</h4>\\n<h4 data-ke-size="size20">\xA0</h4>\\n<h4 data-ke-size="size20"><b><span>Omit &lt;Type, Keys&gt;</span></b></h4>\\n<div>\\n<div>\\n<span><span><span></span></span></span>\\n<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface ButtonProps\\n  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {\\n  size?: \\'sm\\' | \\'md\\' | \\'lg\\';\\n  variant?: \\'fill\\' | \\'outline\\' | \\'ghost\\';\\n  ellipse?: boolean;\\n  leftIcon?: ReactNode;\\n  rightIcon?: ReactNode;\\n  colorScheme?: \\'white\\' | \\'point\\';\\n}</code></pre>\\n</div>\\n</div>\\n<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface IconButtonProps\\n  extends Omit&lt;ButtonProps, \\'leftIcon\\' | \\'rightIcon\\' | \\'children\\'&gt; {\\n  icon?: ReactNode;\\n}</code></pre>\\n<p data-ke-size="size16"><span><span>\uB9CC\uB4E4\uC5B4\uB454 Button \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C key\uB97C \uAC00\uC838\uC640 \uC544\uC774\uCF58\uB9CC \uB4E4\uC5B4\uAC00\uB294 IconButton \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC0AC\uC6A9,</span><br><span>\uAC00\uC838\uC624\uC9C0 \uC54A\uC73C\uB824\uB294 key\uC18D\uC131\uC740 Omit\uC758 \uB450\uBC88\uC9F8 \uC778\uC790\uC5D0 \\'|\\' \uD45C\uC2DC\uB85C \uAD6C\uBD84\uD558\uC5EC \uC81C\uAC70 \uD560 \uC218 \uC788\uB2E4</span>.<br></span><span><br></span></p>\\n<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6">\\n<p data-ke-size="size16"><span>\uCC38\uC870:</span> <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noopener">https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys</a></p>\\n',
      },
    ],
  },
} as ComponentMeta<typeof BlogTemplate>;

export const API = (props: BlogTemplateProps) => {
  return <BlogTemplate {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:24},endLoc:{col:1,line:26},startBody:{col:19,line:24},endBody:{col:1,line:26}}}}},title:"Templates / BlogTemplate",component:a,args:{items:[{title:"Utility Types",pubDate:"2022-12-03 04:58:03",link:"https://quessr.tistory.com/2",thumbnail:"https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png",description:`
<p><figure class="imageblock floatLeft" data-origin-width="1640" data-origin-height="2360" data-ke-mobilestyle="alignCenter"><span data-url="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" data-lightbox="lightbox" data-alt=""><img src="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW4LBv%2FbtrSHNIAFci%2Fkd8VK92Vhnut9F4lSJvjT1%2Fimg.png" width="316" height="455" data-filename="\u110C\u1166\u1106\u1169\u11A8 \u110B\u1165\u11B9\u110B\u1173\u11B7 3.png" data-ke-mobilestyle="alignCenter"></span></figure></p>
<h3 data-ke-size="size23">
<span><b><span>TypeScript Utily types 4\uAC00\uC9C0 \uC815\uB9AC<br><br><br></span></b></span><span><b><span></span></b></span>
</h3>
<ul data-ke-list-type="circle">
<li><span>Partial&lt;Type&gt;<br><br></span></li>
<li><span><span>Required&lt;Type&gt;<br><br></span></span></li>
<li><span><span><span>Pick&lt;Type, Keys&gt;<br><br></span></span></span></li>
<li><span>Omit&lt;Type, Keys&gt;</span></li>
</ul>
<p data-ke-size="size16">\xA0</p>
<p data-ke-size="size16">\xA0</p>
<p data-ke-size="size16">\xA0</p>
<p data-ke-size="size16">\xA0</p>
<h4 data-ke-size="size20">\xA0</h4>
<h4 data-ke-size="size20">\xA0</h4>
<h4 data-ke-size="size20"><b><span>Omit &lt;Type, Keys&gt;</span></b></h4>
<div>
<div>
<span><span><span></span></span></span>
<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface ButtonProps
  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline' | 'ghost';
  ellipse?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  colorScheme?: 'white' | 'point';
}</code></pre>
</div>
</div>
<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface IconButtonProps
  extends Omit&lt;ButtonProps, 'leftIcon' | 'rightIcon' | 'children'&gt; {
  icon?: ReactNode;
}</code></pre>
<p data-ke-size="size16"><span><span>\uB9CC\uB4E4\uC5B4\uB454 Button \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C key\uB97C \uAC00\uC838\uC640 \uC544\uC774\uCF58\uB9CC \uB4E4\uC5B4\uAC00\uB294 IconButton \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC0AC\uC6A9,</span><br><span>\uAC00\uC838\uC624\uC9C0 \uC54A\uC73C\uB824\uB294 key\uC18D\uC131\uC740 Omit\uC758 \uB450\uBC88\uC9F8 \uC778\uC790\uC5D0 '|' \uD45C\uC2DC\uB85C \uAD6C\uBD84\uD558\uC5EC \uC81C\uAC70 \uD560 \uC218 \uC788\uB2E4</span>.<br></span><span><br></span></p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6">
<p data-ke-size="size16"><span>\uCC38\uC870:</span> <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noopener">https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys</a></p>
`}]}},C=e(t=>p(a,{...t}),"API"),B=["API"];export{C as API,B as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories.3b70e21f.js.map
