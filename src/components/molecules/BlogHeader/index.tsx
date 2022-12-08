import 'twin.macro';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';

const BlogHeader = () => {
  return (
    <div tw="w-full bg-secondary lg:px-28 md:px-16 px-4 md:py-10 py-4 grid grid-cols-3">
      <div tw="flex justify-start ">
        <Link
          href="https://quessr.tistory.com/"
          size="md"
          tw="text-tertiay flex items-center scale-75 md:scale-100"
        >
          Blog
        </Link>
      </div>
      <div tw="flex justify-center">
        <Link href="/" size="lg" tw="text-tertiay scale-75 md:scale-100">
          Portfolio
        </Link>
      </div>
      <div tw="flex justify-end items-center">
        <Button
          size="md"
          variant="fill"
          tw="bg-quarternary! border-quarternary! focus:ring-quarternary! hidden sm:flex"
        >
          Contact Me
        </Button>
        <Button
          size="xs"
          variant="fill"
          tw="bg-quarternary! border-quarternary! focus:ring-quarternary! sm:hidden"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default BlogHeader;
