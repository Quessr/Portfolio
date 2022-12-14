import 'twin.macro';

import Button from '../../atoms/Button';
import CardList from '../../organisms/CardList';
import Layout from '../Layout';

export interface BlogTemplateProps {
  items: {
    content: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
  }[];
}

const BlogTemplate = ({ items }: BlogTemplateProps) => {
  return (
    <Layout isBlog blogBg>
      <div tw="lg:px-28 md:px-16 px-4 max-w-screen-xl mx-auto">
        <CardList datas={items} />
        <a
          href="https://quessr.tistory.com/"
          tw="block max-w-fit mx-auto my-16"
        >
          <Button tw="bg-tertiay! border-tertiay! focus:ring-tertiay! px-16!">
            블로그 전체 보기
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default BlogTemplate;
