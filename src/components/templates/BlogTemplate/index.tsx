import 'twin.macro';

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
      <div tw="lg:px-28 md:px-16 px-4 ">
        <CardList datas={items} />
      </div>
    </Layout>
  );
};

export default BlogTemplate;
