import { useEffect, useState } from 'react';

import loadingGIF from '../../../assets/loading.gif';
import BlogTemplate, { BlogTemplateProps } from '../../templates/BlogTemplate';

export interface BlogPageProps {
  loading?: boolean;
}

const BlogPage = () => {
  const [items, setItems] = useState<BlogTemplateProps['items']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm',
    )
      .then((res) => res.json())
      .then((res) => res.items)
      .then((datas: BlogTemplateProps['items']) => {
        const parser = new DOMParser();

        const parsedDatas = datas.map((data) => {
          const parsedDescription =
            parser
              .parseFromString(data.description, 'text/html')
              .querySelector('body')?.textContent ?? '';

          const splitedDate = data.pubDate.split(' ')[0];
          return {
            ...data,
            pubDate: splitedDate,
            description: parsedDescription,
          };
        });
        setItems(parsedDatas);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <BlogTemplate items={items} loading={loading} />
      {loading && <img src={loadingGIF} alt="loading" />}
    </>
  );
};

export default BlogPage;
