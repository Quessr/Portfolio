import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline' | 'ghost';
  ellipse?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  colorScheme?: 'white' | 'point';
}

const Button = ({
  className,
  size = 'md',
  variant = 'fill',
  ellipse,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      tw="flex items-center justify-center px-6 gap-6"
      className={clsx(
        className,
        `btn-${size}`,
        `btn-${variant}`,
        ellipse && 'btn-ellipse',
      )}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${tw`min-w-max`}
  ${tw`text-black`}

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
    ${tw`bg-secondary`}
    ${tw`text-primary`}
    ${tw`border-2 border-secondary `}
    ${tw`focus:ring-1 focus:ring-secondary`}
    ${tw`hover:opacity-[0.8] transition duration-300`}
  }
  &.btn-outline {
    ${tw`bg-primary`}
    ${tw`text-secondary`}
    ${tw`border-2 border-secondary `}
    ${tw`focus:ring-1 focus:ring-secondary`}
  }
  &.btn-ghost {
    ${tw`bg-none`}
    ${tw`text-secondary`}
    ${tw`focus:(border-b-2 border-black)`}
  }

  //ellipse
  &.btn-ellipse {
    ${tw`rounded-[28px]`}
  }
`;

export default Button;
