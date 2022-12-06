import { useEffect } from 'react';

import BlogTemplate from '../../templates/BlogTemplate';

const BlogPage = () => {
  // const [items, setItems] = useState('');

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fquessr.tistory.com%2Frss',
    )
      .then((res) => res.json())
      .then((res) => res.items);
  });

  return <BlogTemplate />;
};

export default BlogPage;
