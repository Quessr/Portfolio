import 'twin.macro';

import Card, { CardProps } from '../../molecules/Card';

export interface CardListProps {
  datas?: CardProps[];
}

const CardList = ({ datas }: CardListProps) => {
  return (
    <div tw="grid md:grid-cols-2 sm:grid-cols-1 gap-y-10 gap-10">
      {datas?.map((data, index) => (
        <Card
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          thumbnail={data.thumbnail}
          title={data.title}
          pubDate={data.pubDate}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default CardList;
