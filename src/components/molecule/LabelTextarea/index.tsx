import 'twin.macro';

import Textarea, { TextareaProps } from '../../atoms/Textarea';

export interface LabelTextareaProps extends Omit<TextareaProps, 'name'> {
  name: string;
  textareaTitle: string;
}

const LabelTextarea = ({
  name,
  textareaTitle,
  ...rest
}: LabelTextareaProps) => {
  return (
    <div tw="grid">
      <label htmlFor={name} tw="mb-2 text-secondary">
        {textareaTitle}
      </label>
      <Textarea name={name} {...rest} />
    </div>
  );
};

export default LabelTextarea;
