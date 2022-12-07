import { ComponentMeta } from '@storybook/react';
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
          '\n<p><figure class="imageblock floatLeft" data-origin-width="1640" data-origin-height="2360" data-ke-mobilestyle="alignCenter"><span data-url="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" data-lightbox="lightbox" data-alt=""><img src="https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW4LBv%2FbtrSHNIAFci%2Fkd8VK92Vhnut9F4lSJvjT1%2Fimg.png" width="316" height="455" data-filename="제목 없음 3.png" data-ke-mobilestyle="alignCenter"></span></figure></p>\n<h3 data-ke-size="size23">\n<span><b><span>TypeScript Utily types 4가지 정리<br><br><br></span></b></span><span><b><span></span></b></span>\n</h3>\n<ul data-ke-list-type="circle">\n<li><span>Partial&lt;Type&gt;<br><br></span></li>\n<li><span><span>Required&lt;Type&gt;<br><br></span></span></li>\n<li><span><span><span>Pick&lt;Type, Keys&gt;<br><br></span></span></span></li>\n<li><span>Omit&lt;Type, Keys&gt;</span></li>\n</ul>\n<p data-ke-size="size16"> </p>\n<p data-ke-size="size16"> </p>\n<p data-ke-size="size16"> </p>\n<p data-ke-size="size16"> </p>\n<h4 data-ke-size="size20"> </h4>\n<h4 data-ke-size="size20"> </h4>\n<h4 data-ke-size="size20"><b><span>Omit &lt;Type, Keys&gt;</span></b></h4>\n<div>\n<div>\n<span><span><span></span></span></span>\n<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface ButtonProps\n  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {\n  size?: \'sm\' | \'md\' | \'lg\';\n  variant?: \'fill\' | \'outline\' | \'ghost\';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: \'white\' | \'point\';\n}</code></pre>\n</div>\n</div>\n<pre class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>export interface IconButtonProps\n  extends Omit&lt;ButtonProps, \'leftIcon\' | \'rightIcon\' | \'children\'&gt; {\n  icon?: ReactNode;\n}</code></pre>\n<p data-ke-size="size16"><span><span>만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,</span><br><span>가져오지 않으려는 key속성은 Omit의 두번째 인자에 \'|\' 표시로 구분하여 제거 할 수 있다</span>.<br></span><span><br></span></p>\n<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6">\n<p data-ke-size="size16"><span>참조:</span> <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noopener">https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys</a></p>\n',
      },
    ],
  },
} as ComponentMeta<typeof BlogTemplate>;

export const API = (props: BlogTemplateProps) => {
  return <BlogTemplate {...props} />;
};
