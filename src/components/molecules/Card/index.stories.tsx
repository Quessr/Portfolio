import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Card from '.';

export default {
  title: 'Molecules / Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const API = (props: typeof Card) => {
  return (
    <Card
      thumbnail="https://i.ibb.co/K6n2cdp/4.png"
      title=" React.isValidElement(), React.Children.map()"
      pubDate="2022.12.3.23:50"
      description="React.isValidElement( ) 란? 앨리먼트를 인자로 받아 대상 객체가 React
      앨리먼트인지를 검증한 후 Boolean 값으로 true 또는 false를 반환 해
      준다. 즉, 리액트 앨리먼트를 검증하고 확인하기 위해 사용하는 React API
      이다."
      link="https://quessr.tistory.com/"
      {...props}
    />
  );
};
