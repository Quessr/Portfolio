import 'twin.macro';

import Button from '../../atoms/Button';

const Header = () => {
  return (
    <div tw="w-full bg-secondary text-primary px-8 py-5 grid grid-cols-3">
      <div tw="flex justify-start">
        <Button>Blog</Button>
        {/* <Button>left2</Button> */}
      </div>
      <div tw="flex justify-center">
        <Button variant="ghost">Portfolio</Button>
      </div>
      <div tw="flex justify-end">
        <Button size="md" variant="outline" tw="text-lg">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Header;
