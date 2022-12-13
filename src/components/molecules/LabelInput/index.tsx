import 'twin.macro';

import Input, { InputProps } from '../../atoms/Input';

export interface LabelInputProps extends Omit<InputProps, 'name'> {
  name: string;
  inputTitle: string;
}

const LabelInput = ({
  name,
  inputTitle,
  required,
  ...rest
}: LabelInputProps) => {
  return (
    <div tw="grid">
      <label htmlFor={name} tw="mb-2 text-secondary">
        {inputTitle}
        {required && <span> *</span>}
      </label>
      <Input name={name} required={required} {...rest} />
    </div>
  );
};

export default LabelInput;
