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
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
      {
        title: 'Utility Types',
        pubDate: '2022-12-03 04:58:03',
        link: 'https://quessr.tistory.com/2',
        thumbnail:
          'https://blog.kakaocdn.net/dn/W4LBv/btrSHNIAFci/kd8VK92Vhnut9F4lSJvjT1/img.png',
        description:
          "\n\nTypeScript Utily types 4가지 정리\n\n\nPartial<Type>\nRequired<Type>\nPick<Type, Keys>\nOmit<Type, Keys>\n\n \n \n \n \n \n \nOmit <Type, Keys>\n\n\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: 'sm' | 'md' | 'lg';\n  variant?: 'fill' | 'outline' | 'ghost';\n  ellipse?: boolean;\n  leftIcon?: ReactNode;\n  rightIcon?: ReactNode;\n  colorScheme?: 'white' | 'point';\n}\n\n\nexport interface IconButtonProps\n  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {\n  icon?: ReactNode;\n}\n만들어둔 Button 컴포넌트에서 key를 가져와 아이콘만 들어가는 IconButton 컴포넌트를 만들기 위해 사용,가져오지 않으려는 key속성은 Omit의 두번째 인자에 '|' 표시로 구분하여 제거 할 수 있다.\n\n참조: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys\n",
      },
    ],
  },
} as ComponentMeta<typeof BlogTemplate>;

export const API = (props: BlogTemplateProps) => {
  return <BlogTemplate {...props} />;
};
