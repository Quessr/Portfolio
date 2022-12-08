import 'twin.macro';

import BlogHeader from '../../molecules/BlogHeader';
import Footer from '../../molecules/Footer';
import CardList from '../../organisms/CardList';

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
  // console.log(items);
  return (
    <div tw="grid gap-y-28 bg-secondary">
      <BlogHeader />

      <div tw="px-28 ">
        <CardList datas={items} />
      </div>

      <Footer />
    </div>
  );
};

export default BlogTemplate;
