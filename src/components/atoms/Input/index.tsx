import clsx from 'clsx';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  focusOutline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Input = ({
  className,
  size = 'md',
  focusOutline,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      className={clsx(
        className,
        `input-${size}`,
        focusOutline && 'input-focus_outline',
      )}
      {...rest}
    />
  );
};

const StyledInput = styled.input`
  ${tw`outline-none pl-2 `}

  //sizes
  &.input-sm {
    ${tw`h-10`}
  }
  &.input-md {
    ${tw`h-12`}
  }
  &.input-lg {
    ${tw`h-14`}
  }

  //focus outline
  &.input-focus_outline {
    ${tw`focus:outline focus:outline-offset-4 focus:outline-white`}
  }
`;
export default Input;
