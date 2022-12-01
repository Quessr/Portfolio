import { ComponentMeta } from '@storybook/react';

import Section from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Organism / Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const API = () => {
  return (
    <div>
      <Section
        sectionTitle="Projects"
        title="팀 프로젝트 - Mocco"
        items={[
          {
            subTitle: '프로젝트 진행 기간',
            contents: `2022년 9월 7일 ~ 10월 12일 (프론트엔드 4, 백엔드 2)`,
          },
          {
            subTitle: '프로젝트 소개',
            contents: `'모두 모여서 코딩'과 모임의 순 우리말인 모꼬지를 합쳐 서비스의 이름을 모꼬로 정했습니다.
모꼬는 온라인 상에서 같은 코딩 주제를 공부하는 스터디원과 스터디를 진행하고, 서로의 결과물을 확인할 수 있는 서비스입니다.`,
          },
        ]}
      />
      <Section
        sectionTitle="About me"
        items={[
          {
            subTitle: 'Knowledgeable',
            contents: [
              'React를 이용한 SPA 클라이언트 앱 구축 및 기능 개발.',
              'emotion 과 styled-components를 이용한 CSS-in-JS 개발.',
              'Axios를 이용한 AJAX 구현.',
            ],
          },
        ]}
      />
    </div>
  );
};
