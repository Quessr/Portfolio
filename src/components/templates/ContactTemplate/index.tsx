import 'twin.macro';

import ContactIcons from '../../molecules/ContactIcons';
import ContactForm, { ContactFormProps } from '../../organisms/ContactForm';
import Layout from '../Layout';

export type ContactTemplateProps = ContactFormProps;

const ContactTemplate = ({ onSubmit }: ContactTemplateProps) => {
  return (
    <Layout>
      <div tw="grid md:grid-cols-2 sm:grid-cols-1 lg:px-28 md:px-16 px-8 gap-y-8 max-w-screen-xl py-28 mx-auto w-full">
        {/* Get in Touch */}
        <div tw="text-secondary h-[280px] grid ">
          <h3 tw="md:text-4xl text-3xl">Get in Touch</h3>
          <p tw="md:text-xl text-lg">Quessr00@gmail.com</p>
          <p tw="md:text-xl text-lg">010 - 7626 - 7410</p>
          <ContactIcons />
        </div>
        {/* contactForm */}
        <ContactForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default ContactTemplate;
