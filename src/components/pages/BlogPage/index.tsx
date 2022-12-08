import { useEffect, useState } from 'react';

import BlogTemplate, { BlogTemplateProps } from '../../templates/BlogTemplate';

const BlogPage = () => {
  const [items, setItems] = useState<BlogTemplateProps['items']>([]);

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss&api_key=4yj4wfdfz8oekzauivyrznnwjjrdtp032aowo1jm',
    )
      .then((res) => res.json())
      .then((res) => res.items)
      .then((datas: BlogTemplateProps['items']) => {
        const parser = new DOMParser();

        const parsedDatas = datas.map((data) => {
          const parsedDescription = parser
            .parseFromString(data.description, 'text/html')
            .querySelector('body')?.textContent;

          return { ...data, description: parsedDescription };
        });
        setItems(parsedDatas);
      });
  });
  // console.log(items);
  return <BlogTemplate items={items} />;
};

export default BlogPage;
