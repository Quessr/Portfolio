import clsx from 'clsx';
import React from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  to: string;
}
// Pick<ButtonProps, 'size' | 'variant' | 'ellipse' | 'colorScheme'>;

const Link = ({
  className,
  size,
  active,
  children,
  onClick,
  to,
  ...rest
}: LinkProps) => {
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <StyledLink
      {...rest}
      href={href}
      className={clsx(className, `link-${size}`, active && 'link-active')}
      onClick={(event) => {
        if (!to.startsWith('/') && !to.includes(window.location.origin)) {
          event.preventDefault();
          window.location.href = to;
          return;
        }

        onClick?.(event);
        if (!event?.defaultPrevented) {
          handleClick(event);
        }
      }}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  //size
  &.link-sm {
    ${tw`h-10 text-base`}
  }
  &.link-md {
    ${tw`h-12 text-lg`}
  }
  &.link-lg {
    ${tw`h-14 text-[32px]`}
  }

  //active
  &.link-active {
    ${tw`underline underline-offset-8`}
  }
`;
export default Link;
