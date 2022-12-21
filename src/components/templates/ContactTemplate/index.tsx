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
          <h3 tw="md:text-4xl text-3xl my-10">Get in Touch</h3>
          <div tw="flex gap-1">
            <h2 tw="text-lg">
              저의 포트폴리오 사이트에 방문 해 주셔서 감사합니다
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              tw="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
          <p tw="text-lg">
            궁금한 사항이나 개선사항이 있다면 언제든 편안하게 연락 주세요!
          </p>
          <p tw="md:text-xl text-lg my-4">Quessr00@gmail.com</p>
          <p tw="md:text-xl text-lg my-4">010 - 7626 - 7410</p>
          <ContactIcons />
        </div>
        {/* contactForm */}
        <ContactForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default ContactTemplate;
