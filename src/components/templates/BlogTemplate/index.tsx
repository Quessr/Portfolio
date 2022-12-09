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
    <div tw="grid gap-y-16 bg-secondary">
      <BlogHeader />

      <div tw="lg:px-28 md:px-16 px-4 ">
        <CardList datas={items} />
      </div>

      <Footer />
    </div>
  );
};

export default BlogTemplate;
