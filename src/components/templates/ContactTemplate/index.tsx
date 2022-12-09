import 'twin.macro';

import GithubIcon from '../../atoms/Icons/GithubIcon';
import TwitterIcon from '../../atoms/Icons/TwitterIcon';
import Footer from '../../molecules/Footer';
import Header from '../../molecules/Header';
import ContactForm, { ContactFormProps } from '../../organisms/ContactForm';

export type ContactTemplateProps = ContactFormProps;

const ContactTemplate = ({ onSubmit }: ContactTemplateProps) => {
  return (
    <div tw="grid lg:gap-y-24 md:gap-y-14 gap-y-8 bg-primary">
      <Header />

      <div tw="grid md:grid-cols-2 sm:grid-cols-1 lg:px-28 md:px-16 px-8 gap-y-8">
        {/* Get in Touch */}
        <div tw="text-secondary h-[280px] grid">
          <h3 tw="md:text-4xl text-3xl">Get in Touch</h3>
          <p tw="md:text-xl text-lg">Quessr00@gmail.com</p>
          <p tw="md:text-xl text-lg">010 - 7626 - 7410</p>
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
