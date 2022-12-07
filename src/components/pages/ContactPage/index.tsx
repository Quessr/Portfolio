import emailjs from '@emailjs/browser';

import ContactTemplate from '../../templates/ContactTemplate';

const ContactPage = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target as HTMLFormElement,
        'YOUR_PUBLIC_KEY',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return <ContactTemplate onSubmit={sendEmail} />;
};

export default ContactPage;
