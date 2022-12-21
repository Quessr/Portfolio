import { ReactElement } from 'react';
import 'twin.macro';

export interface SectionProps extends React.PropsWithChildren {
  sectionTitle?: string;
  title?: string;
  image?: string;
  items: Array<{ subTitle?: string; contents?: string | string[] }>;
  captions?: ReactElement[];
}

const Section = ({
  sectionTitle,
  title,
  image,
  items,
  captions,
}: SectionProps) => {
  return (
    <div tw="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] max-w-screen-xl mx-auto">
      {/* section title */}
      <div tw="md:text-3xl text-2xl mb-8">{sectionTitle}</div>

      {/* units */}
      <div tw="grid gap-y-4">
        {/* sub title */}
        {title && <h4 tw="md:text-2xl text-xl font-medium">{title}</h4>}
        {title && <hr />}

        {image && <img tw="w-[450px]" src={image} alt="_" />}

        {items.map((item) => {
          return (
            <>
              <h5 tw="md:text-xl text-lg mb-2">{item.subTitle}</h5>
              {Array.isArray(item.contents) ? (
                <ul tw="list-disc mx-6 grid gap-y-1">
                  {item.contents.map((content) => {
                    return <li tw="text-base">{content}</li>;
                  })}
                </ul>
              ) : (
                <pre tw="text-base mx-1 whitespace-pre-wrap">
                  {item.contents?.trim()}
                </pre>
              )}
            </>
          );
        })}
        {captions}
      </div>
    </div>
  );
};

export default Section;
