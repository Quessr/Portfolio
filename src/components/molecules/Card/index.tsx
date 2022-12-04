import 'twin.macro';

import Link from '../../atoms/Link';

const Card = () => {
  return (
    <div tw="flex gap-6">
      <img
        src="https://i.ibb.co/K6n2cdp/4.png"
        alt="4"
        tw="min-w-[200px] h-[200px] object-cover"
      />
      <div>
        <h1 tw="text-3xl mb-5 pt-3">
          React.isValidElement(), React.Children.map()
        </h1>
        <div tw="mb-3">2022.12.3.23:50</div>
        <p tw="mb-3">
          React.isValidElement( ) 란? 앨리먼트를 인자로 받아 대상 객체가 React
          앨리먼트인지를 검증한 후 Boolean 값으로 true 또는 false를 반환 해
          준다. 즉, 리액트 앨리먼트를 검증하고 확인하기 위해 사용하는 React API
          이다.
        </p>
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
