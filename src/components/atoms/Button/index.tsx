import clsx from 'clsx';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline' | 'ghost';
  ellipse?: boolean;
}

const Button = ({
  size = 'md',
  variant = 'fill',
  ellipse,
  ...rest
}: ButtonProps) => {
  // console.log(
  //   [`btn-${size}`, `btn-${variant}`, ellipse && 'btn-ellipse']
  //     .filter((c) => c)
  //     .join(' ')
  // );
  return (
    <StyledButton
      className={clsx(
        `btn-${size}`,
        `btn-${variant}`,
        ellipse && 'btn-ellipse',
      )}
      {...rest}
    />
  );
};

const StyledButton = styled.button`
  ${tw`min-w-max`}
  ${tw`text-purple-500`}


  //sizes
  &.btn-sm {
    ${tw`h-10 w-10`}
  }
  &.btn-md {
    ${tw`h-12 w-12`}
  }
  &.btn-lg {
    ${tw`h-14 w-14`}
  }

  //varients
  &.btn-fill {
    ${tw`bg-purple-500`}
    ${tw`text-white`}
    ${tw`border-2 border-purple-500 rounded-lg`}
    ${tw`focus:ring-1 focus:ring-purple-500`}
  }
  &.btn-outline {
    ${tw`bg-white`}
    ${tw`text-purple-500`}
    ${tw`border-2 border-purple-500 rounded-lg`}
    ${tw`focus:ring-1 focus:ring-purple-500`}
  }
  &.btn-ghost {
    ${tw`bg-none rounded-lg`}
    ${tw`text-purple-500`}
    ${tw`hover:bg-purple-50`}
  }

  //ellipse
  &.btn-ellipse {
    ${tw`rounded-[28px]`}
  }
`;

export default Button;