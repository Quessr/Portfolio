import 'twin.macro';

import GithubIcon from '../../atoms/Icons/GithubIcon';
import TwitterIcon from '../../atoms/Icons/TwitterIcon';

const Footer = () => {
  return (
    <div tw="bg-tertiay h-[184px] fill-secondary flex flex-col justify-center items-center gap-y-10">
      <div tw="flex justify-center gap-3">
        <TwitterIcon />
        <GithubIcon />
      </div>
      <div>
        <p tw="text-secondary">Made by sera</p>
      </div>
    </div>
  );
};

export default Footer;
