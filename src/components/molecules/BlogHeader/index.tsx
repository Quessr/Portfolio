import 'twin.macro';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';

const BlogHeader = () => {
  return (
    <div tw="w-full bg-secondary px-8 py-5 grid grid-cols-3">
      <div tw="flex justify-start ">
        <Link
          href="https://quessr.tistory.com/"
          size="md"
          tw="text-tertiay flex items-center "
        >
          Blog
        </Link>
      </div>
      <div tw="flex justify-center">
        <Link href="/" size="lg" tw="text-tertiay">
          Portfolio
        </Link>
      </div>
      <div tw="flex justify-end">
        <Button
          size="md"
          variant="fill"
          tw="bg-quarternary! border-quarternary! focus:ring-quarternary!"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default BlogHeader;
