import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
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
  ${tw`min-w-max flex items-center justify-center gap-6`}
  ${tw`text-black`}

  //sizes
  &.btn-xs {
    ${tw`h-8 w-8 text-xs px-1`}
  }
  &.btn-sm {
    ${tw`h-10 w-10 text-sm px-2`}
  }
  &.btn-md {
    ${tw`h-12 w-12 text-base px-4`}
  }
  &.btn-lg {
    ${tw`h-14 w-14 text-[32px] px-6`}
  }

  //varients
  &.btn-fill {
    ${tw`bg-primary`}
    ${tw`text-secondary`}
    ${tw`border-2 border-primary `}
    ${tw`focus:ring-1 focus:ring-primary`}
    ${tw`hover:opacity-[0.8] transition duration-300`}
  }
  &.btn-outline {
    ${tw`bg-secondary`}
    ${tw`text-primary`}
    ${tw`border-2 border-primary `}
    ${tw`focus:ring-1 focus:ring-primary`}
    ${tw`hover:opacity-[0.8] transition duration-300`}
  }
  &.btn-ghost {
    ${tw`bg-none`}
    ${tw`text-secondary`}
    ${tw`hover:opacity-[0.8] transition duration-300`}
    /* ${tw`focus:(border-b-2 border-black)`} */
  }

  //ellipse
  &.btn-ellipse {
    ${tw`rounded-[28px]`}
  }
`;

export default Button;
