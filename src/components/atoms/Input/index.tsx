import clsx from 'clsx';
import tw, { styled } from 'twin.macro';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  focusOutline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Input = ({
  className,
  focusOutline,
  size = 'md',
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
  ${tw`outline-none pl-2 appearance-none rounded-none`}

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
