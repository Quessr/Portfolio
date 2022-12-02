import 'twin.macro';

import Input, { InputProps } from '../Input';

export interface LabelInputProps extends Omit<InputProps, 'name'> {
  name: string;
  inputTitle: string;
}

const LabelInput = ({ name, inputTitle, ...rest }: LabelInputProps) => {
  return (
    <div tw="grid">
      <label htmlFor={name} tw="mb-2 text-secondary">
        {inputTitle}
      </label>
      <Input name={name} {...rest} />
    </div>
  );
};

export default LabelInput;
