import emailjs from '@emailjs/browser';

import ContactTemplate from '../../templates/ContactTemplate';

const ContactPage = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY,
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
