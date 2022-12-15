import 'twin.macro';

import IconButton from '../../atoms/Button/IconButton';
import GithubIcon from '../../atoms/Icons/GithubIcon';
import LinkedinIcon from '../../atoms/Icons/Linkedin';

const ContactIcons = () => {
  return (
    <div tw="flex">
      <a href="https://github.com/Quessr" tw="h-fit">
        <IconButton
          icon={<GithubIcon />}
          size="sm"
          tw="fill-secondary"
          variant="ghost"
        />
      </a>
      <a href="https://www.linkedin.com/in/quessr/" tw="h-fit">
        <IconButton
          icon={<LinkedinIcon />}
          size="sm"
          tw="fill-secondary"
          variant="ghost"
        />
      </a>
    </div>
  );
};

export default ContactIcons;
