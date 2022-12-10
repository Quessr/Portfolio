import emailjs from '@emailjs/browser';

import ContactTemplate from '../../templates/ContactTemplate';

const ContactPage = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.serviceID,
        import.meta.env.templateID,
        e.target as HTMLFormElement,
        import.meta.env.publicKey,
      )
      .then(
        () => {
          // eslint-disable-next-line no-alert
          alert('메일 전송에 성공했습니다.');
        },
        () => {
          // eslint-disable-next-line no-alert
          alert('메일 전송에 실패했습니다.');
        },
      );
  };

  return <ContactTemplate onSubmit={sendEmail} />;
};

export default ContactPage;
