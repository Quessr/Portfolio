import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import Section from '.';
import mocco from '../../../assets/mocco_animation.gif';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules / Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const API = () => {
  return (
    <div>
      <div tw="text-secondary bg-primary">
        <Section
          sectionTitle="Projects"
          title="팀 프로젝트 - Mocco"
          image="data:image/png;base64,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"
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
      </div>

      <div>
        <Section
          sectionTitle="About me"
          image={mocco}
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
          captions={[
            <a href="https://github.com/codestates-seb/seb39_main_060">
              github
            </a>,
          ]}
        />
      </div>
    </div>
  );
};
