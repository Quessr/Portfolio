import { PropsWithChildren } from 'react';
import 'twin.macro';

import Link from '../../atoms/Link';

export interface CardProps extends PropsWithChildren {
  image?: string;
  title?: string;
  description?: string;
  pubDate?: string;
}

const Card = ({ image, title, pubDate, description }: CardProps) => {
  return (
    <div tw="flex gap-6">
      <img src={image} alt="4" tw="min-w-[200px] h-[200px] object-cover" />
      <div>
        <h1 tw="text-3xl mb-5 pt-3">{title}</h1>
        <div tw="mb-3 text-gray-500">{pubDate}</div>
        <p tw="mb-3">{description}</p>
        <Link
          href="https://quessr.tistory.com/manage/newpost/4?type=post&returnURL=https%3A%2F%2Fquessr.tistory.com%2F4"
          active
          tw="text-quarternary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
