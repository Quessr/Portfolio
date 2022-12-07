import emailjs from '@emailjs/browser';

import ContactTemplate from '../../templates/ContactTemplate';

const ContactPage = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c0ii0sw',
        'template_y3e3vl9',
        e.target as HTMLFormElement,
        'rT12yYllWOljbtm0P',
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
