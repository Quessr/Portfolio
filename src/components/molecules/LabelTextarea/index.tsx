import 'twin.macro';

import Textarea, { TextareaProps } from '../../atoms/Textarea';

export interface LabelTextareaProps extends Omit<TextareaProps, 'name'> {
  name: string;
  textareaTitle: string;
}

const LabelTextarea = ({
  name,
  textareaTitle,
  required,
  ...rest
}: LabelTextareaProps) => {
  return (
    <div tw="grid">
      <label htmlFor={name} tw="mb-2 text-tertiay">
        {textareaTitle}
        {required && <span> *</span>}
      </label>
      <Textarea name={name} required={required} {...rest} />
    </div>
  );
};

export default LabelTextarea;
