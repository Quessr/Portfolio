import { PropsWithChildren } from 'react';
import tw from 'twin.macro';

import BlogHeader from '../../molecules/BlogHeader';
import Footer from '../../molecules/Footer';
import Header from '../../molecules/Header';

interface LayoutProps extends PropsWithChildren {
  isBlog?: boolean;
  blogBg?: boolean;
}

const Layout = ({ children, isBlog, blogBg }: LayoutProps) => {
  return (
    <div
      css={[
        tw`flex flex-col bg-primary min-h-screen place-content-between`,
        blogBg ? tw`bg-secondary` : tw`bg-primary`,
      ]}
    >
      {isBlog ? <BlogHeader /> : <Header />}
      <div tw="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
