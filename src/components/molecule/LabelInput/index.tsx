import 'twin.macro';

import Input, { InputProps } from '../../atoms/Input';

export interface LabelInputProps extends Omit<InputProps, 'name' | 'type'> {
  type?: InputProps['type'] | 'textarea';
  name: string;
  inputTitle: string;
}

const LabelInput = ({ type, name, inputTitle, ...rest }: LabelInputProps) => {
  return (
    <div tw="grid">
      <label htmlFor={name} tw="mb-2 text-secondary">
        {inputTitle}
      </label>
      <Input
        as={type === 'textarea' ? 'textarea' : undefined}
        type={type !== 'textarea' ? type : undefined}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default LabelInput;
