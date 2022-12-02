import 'twin.macro';

import Button from '../../atoms/Button';

const Header = () => {
  return (
    <div tw="w-full bg-primary text-primary px-8 py-5 grid grid-cols-3">
      <div tw="flex justify-start ">
        <Button size="md">Blog</Button>
        {/* <Button>left2</Button> */}
      </div>
      <div tw="flex justify-center">
        <Button size="lg" variant="ghost">
          Portfolio
        </Button>
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
