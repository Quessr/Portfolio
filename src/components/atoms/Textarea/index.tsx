import clsx from 'clsx';
import React from 'react';
import tw, { styled } from 'twin.macro';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  focusOutline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Textarea = ({
  className,
  focusOutline,
  size = 'md',
  ...rest
}: TextareaProps) => {
  return (
    <StyledTextarea
      className={clsx(
        className,
        `textarea-${size}`,
        focusOutline && 'textarea-focus_outline',
      )}
      {...rest}
    />
  );
};

const StyledTextarea = styled.textarea`
  ${tw`outline-none pl-2 pt-2 resize-none`}

  //sizes
  &.textarea-sm {
    ${tw`min-h-[50px]`}
  }
  &.textarea-md {
    ${tw`min-h-[100px]`}
  }
  &.textarea-lg {
    ${tw`min-h-[200px]`}
  }

  //focus outline
  &.textarea-focus_outline {
    ${tw`focus:outline focus:outline-offset-4 focus:outline-white`}
  }
`;
export default Textarea;
