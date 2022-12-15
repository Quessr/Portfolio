import 'twin.macro';

import ContactIcons from '../ContactIcons';

const Footer = () => {
  return (
    <div tw="bg-tertiay h-[184px] fill-secondary flex flex-col justify-center items-center gap-y-10">
      <ContactIcons />
      <div>
        <p tw="text-secondary">Made by sera</p>
      </div>
    </div>
  );
};

export default Footer;
