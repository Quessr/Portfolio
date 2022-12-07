import 'twin.macro';

import GithubIcon from '../../atoms/Icons/GithubIcon';
import TwitterIcon from '../../atoms/Icons/TwitterIcon';
import Footer from '../../molecules/Footer';
import Header from '../../molecules/Header';
import ContactForm, { ContactFormProps } from '../../organisms/ContactForm';

type ContactTemplateProps = ContactFormProps;

const ContactTemplate = ({ onSubmit }: ContactTemplateProps) => {
  return (
    <div tw="grid gap-y-28 bg-primary">
      <Header />

      <div tw="grid grid-cols-2 px-28">
        {/* Get in Touch */}
        <div tw="text-secondary h-[280px] grid">
          <h3 tw="text-4xl">Get in Touch</h3>
          <p tw="text-xl">heosera76@gmail.com</p>
          <p tw="text-xl">010 - 7626 - 7410</p>
          <div tw="flex fill-secondary gap-3">
            <TwitterIcon />
            <GithubIcon />
          </div>
        </div>
        {/* contactForm */}
        <ContactForm onSubmit={onSubmit} />
      </div>

      <Footer />
    </div>
  );
};

export default ContactTemplate;
