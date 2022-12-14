import 'twin.macro';

import Section from '../../molecules/Section';
import Layout from '../Layout';

const PortfolioTemplate = () => {
  return (
    <Layout>
      {/* Intoduction */}
      <div tw="lg:px-40 md:px-24 px-4">
        <p tw="lg:text-6xl md:text-5xl text-4xl text-secondary leading-[3rem]! md:leading-[4rem]! md:py-24 py-14 w-full max-w-screen-xl mx-auto">
          매일 한걸음 차근차근 나아가는 프론트엔드 개발자 허세라 입니다.
        </p>
      </div>

      {/* Section1 */}
      <div tw="bg-primary lg:px-40 md:px-24 px-4 md:py-12 py-8 text-secondary">
        <Section
          sectionTitle="Stack"
          items={[
            {
              subTitle: 'HTML / CSS(Styled-Components, Emotion, Tailwindcss)',
              contents: [
                'HTML 시맨틱 태그를 사용해야 하는 이유를 이해하고, 사용할 수 있다.',
                'Open Graph Meta Tag를 이해하고 적용 할 수 있다.',
                '반응형 웹을 구현 할 수 있다.',
              ],
            },
            {
              subTitle: 'JavsScript',
              contents: [
                '변수, 함수, 타입과 반복문, 조건문을 이해하고, 사용할 수 있다.',
                '원시 자료형과 참조 자료형의 차이를 이해하고 사용할 수 있다.',
                'ES6 주요 문법을 이해하고 사용할 수 있다.',
                '고차함수 filter, map, reduce를 사용하여 복잡한 코드를 단순화 할 수 있다.',
                '비동기 프로그래밍을 이해하고 적용할 수 있다.',
              ],
            },
            {
              subTitle: 'React / Vite',
              contents: [
                'React Router를 이해하고 웹 페이지에 SPA 기술을 적용할 수 있다.',
                'state, props에 대해 이해하고 앱에 적용할 수 있다.',
                'Effect Hook 내 ajax 요청을 할 수 있다.',
                'React Hooks대해 이해하고 적용할 수 있다.',
              ],
            },
            {
              subTitle: 'Storybook',
              contents: [
                'Storybook을 사용하여 컴포넌트를 문서화 하고, 시각화하여 재사용성을 증대 시킬 수 있다.',
              ],
            },
            {
              subTitle: 'Recoil',
              contents: [
                '상태관리의 개념과 필요성을 이해하고 활용 할 수 있다.',
              ],
            },
            {
              subTitle: 'Axios',
              contents: [
                'axios interceptor를 활용한 토큰 갱신을 하여 사용자 경험을 향상 시킬 수 있다.',
              ],
            },
            {
              subTitle: 'Github Actions / Vercel',
              contents: [
                'Github Actions를 사용하여 workflow를 자동화 할 수 있다.',
              ],
            },
            {
              subTitle: 'ESLint / Prettier',
              contents: ['ESLint Airbnb 세팅을 앱에 적용하여 사용 할 수 있다.'],
            },
          ]}
        />
      </div>

      {/* Section2 */}
      <div tw="bg-secondary lg:px-40 md:px-24 px-4 md:py-12 py-8">
        <Section
          sectionTitle="Projects"
          title="QuessrPolio"
          items={[
            {
              subTitle: 'storybook을 이용한 UI 컴포넌트 구현 및 구조화',
              contents: [
                '하나의 페이지가 완성되기 전에도 결과물을 컴포넌트 단위로 확인 할 수 있다.',
                'UI 컴포넌트를 독립적으로 개발함으로써, 컴포넌트의 재사용성을 향상',
                '앱의 종속성에 영향을 받지 않고 컴포넌트를 구현 및 테스트 할 수 있음으로써 개발 속도 향상',
                '모바일 반응형 적용시  viewport기능을 활용하여 생상성 향상.',
              ],
            },
            {
              subTitle: '아토믹디자인 패턴을 활용한 폴더 구조 구성',
              contents: [
                '상향식 개발 (Bottom-Up Development)방법을 통해 컴포넌트의 재사용성과 독립성을 극대화.',
                '작은 컴포넌트들을 혼합해 큰 컴포넌트를 만들어냄으로써 UI의 일관성 향상.',
                '컴포넌트가 단위별로 이루어져 큰 컴포넌트에서 작은 컴포넌트를 삭제, 추가, 수정 함으로써 유지보수 시 효율성을 향상.',
              ],
            },
            {
              subTitle:
                '티스토리 rss를 이용하여 블로그의 최신 블로그 글을 가져올 수 있도록 구현',
            },
            {
              subTitle:
                'Tailwindcss, Styled-Components + Twin.macro를 이용하여 CSS-in-JS 구현',
              contents: [
                'Tailwindcss의 utility classes를 사용하여 개발 속도를 향상.',
                'Tailwindcss의 customizing colors기능을 사용하여 프로젝트의 주요색상에 class명을 custom하여 부여함으로써 스타일 변경시 유연하게 대처할 수 있게 하여 유지보수 시 효율성을 향상.',
                'Styled-Components를 사용하여 반복되는 스타일을 컴포넌트로 정리하여 가독성을 향상',
              ],
            },
            {
              subTitle:
                'Typescript의 Interface와 type을 사용하여 타입을 정의하고, utillity type을 사용함으로써 타입정의를 반복하면서 코드가 중복되는 것을 막음으로써 유지보수성을 향상',
            },
            {
              subTitle: 'EmailJS를 사용하여 contact기능을 구현.',
            },
            {
              subTitle: '모바일 반응형 디자인 구현',
              contents: [
                'PC, Tablet, Mobile 화면에 UI 요소들이 유기적을 배치되도록 구현',
              ],
            },
          ]}
        />
        <Section
          title="Mocco"
          image="data:image/png;base64,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"
          items={[
            {
              subTitle:
                'JWT을 활용한 이메일 인증기능 구현 및 Recoil을 통한 유저정보 전역 상태관리',
              contents: [
                '이메일 로그인 시 axios 요청에 대한 응답으로 받은 token을 localstorage를 사용하여 브라우저에 저장',
                'setAuthorizationToken 함수를 만들어 응답으로 받은 token을 header에 실어주고 로그아웃시에는 localstorage에서 토큰을 삭제 해 주도록 구현.',
                'Recoil을 사용하여 유저정보를 atom에 담아주어 전역에서 유저정보를 상태관리 할 수 있도록 처리.',
              ],
            },
            {
              subTitle: 'github Oauth 인증 기능 구현',
              contents: [
                '클라이언트에서 authorization code를 받아 body에 실어 서버로 요청을 보낸 후, 서버에서 응답으로 받아온  토큰으로 인증을 구현',
              ],
            },
            {
              subTitle:
                'formData객체와 useRef를 이용한 프로필 이미지 업로드 기능 구현',
              contents: [
                'formData를 사용하여 input값에 담긴 이미지파일을 body에 실어 요청을 보내어 구현',
                '직접만든 버튼을 클릭 했을 때 input의 파일선택 창이 열리도록 하기 위해 useRef를 사용하여 구현',
              ],
            },
            {
              subTitle: 'Potal과 React 상속을 이용한 모달창 구현',
              contents: [
                'css 상속구조에서 벗어나 모달창을 화면 중앙에 위치 시키기 위해 Potal 구현 및 활용',
                'React 상속을 이용하여 다른 컴포넌트가 임의의 자식을 전달하여 사용할 수 있도록  구현함으로써 모달 컴포넌트의 재사용성 극대화',
              ],
            },
            {
              subTitle:
                'PrivateRoute 컴포넌트를 이용한 인증여부에 따른 접근제한 기능 구현',
              contents: [
                '전역에서 상태관리하는 유저정보의 유무에 따라 인증여부를 판단하고 인증이 안됐을 시, 접근하려던 페이지경로를 로그인페이지로 같이 전달하도록 PrivateRoute 컴포넌트를 구현하여 로그인이 성공한 경우 원래 접근하려던 페이지로 바로 이동 시켜 사용자 경험 향상',
              ],
            },
            {
              subTitle: 'Axios interceptor를 활용한 토큰 자동 갱신 기능 구현',
              contents: [
                'access token이 만료 됐을 시, axios의 interceptor를 이용하여 refresh token으로 access token 재발급 요청을 보내주어 로그인이 풀리지 않도록 구현',
                '갱신된 토큰으로 시도했던 요청을 다시 보내 줌으로써 사용자 경험 향상',
              ],
            },
          ]}
        />
      </div>

      {/* Section3 */}
      <div tw="bg-[#FDF0E6] lg:px-40 md:px-24 px-4 md:py-12 py-8">
        <Section
          sectionTitle="Education"
          title="Codestates"
          items={[
            {
              contents: [
                'HTML/CSS, 자바스크립트, 리액트, 네트워크, 자료구조/알고리즘, 컴퓨터공학기초, TDD 이론지식 습득',
                '35번의 페어프로그램을 통한 과제해결 경험',
                '알고리즘 문제 풀이',
                '2번의 팀 단위로 백엔드 개발자와 협업 경험',
                '서비스 기획 및 분석 부터 사용자요구사항정의서, 화면정의서, 피그마를 직접 정의하고 작성 해 본 경험',
                'Coz’s Git flow에 따른 브랜치 활용과 칸반 및 이슈를 사용 해 본 경험',
              ],
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default PortfolioTemplate;
