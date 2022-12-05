import 'twin.macro';

import Card, { CardProps } from '../../molecules/Card';

export interface CardListProps {
  datas?: CardProps[];
}

const CardList = ({ datas }: CardListProps) => {
  return (
    <div tw="grid grid-cols-2 gap-y-10 gap-10">
      {datas?.map((data) => (
        <Card
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
