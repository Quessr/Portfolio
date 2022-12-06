import 'twin.macro';

import BlogHeader from '../../molecules/BlogHeader';
import Footer from '../../molecules/Footer';
import CardList from '../../organisms/CardList';

const BlogTemplate = () => {
  return (
    <div tw="grid gap-y-28 bg-secondary">
      <BlogHeader />

      <div tw="px-28">
        <CardList
          datas={[
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
            {
              thumbnail:
                'https://blog.kakaocdn.net/dn/c9dzbu/btrSLZ8mBIW/ZV8ZFVknnKXK8EIStSOkd0/img.png',
              title: 'Tailwindcss / Customizing-colors',
              pubDate: 'Sat, 03 Dec 2022 23:50:59 +0900',
              description:
                'Tailwindcss customizing-colors 기능에 대한 정리\n\n\nTailwindcss customizing-colors 기능 이란?\n사용한 이유\n사용 방법\n좋은점\n\n \n \n \n \n \nTailwindcss',
            },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

export default BlogTemplate;
