import 'twin.macro';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';

const Header = () => {
  return (
    <div tw="w-full bg-primary text-primary px-8 py-5 grid grid-cols-3">
      <div tw="flex justify-start ">
        <Link
          href="https://quessr.tistory.com/"
          size="md"
          tw="text-secondary flex items-center "
        >
          Blog
        </Link>
        {/* <Button>left2</Button> */}
      </div>
      <div tw="flex justify-center">
        <Link href="/" size="lg" tw="text-secondary">
          Portfolio
        </Link>
      </div>
      <div tw="flex justify-end">
        <Button size="md" variant="outline">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Header;
