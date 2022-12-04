import clsx from 'clsx';
import tw, { styled } from 'twin.macro';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}
// Pick<ButtonProps, 'size' | 'variant' | 'ellipse' | 'colorScheme'>;

const Link = ({ className, size, active, children, href }: LinkProps) => {
  return (
    <StyledLink
      href={href}
      className={clsx(className, `link-${size}`, active && 'link-active')}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  //size
  &.link-sm {
    ${tw`h-10 text-sm`}
  }
  &.link-md {
    ${tw`h-12 text-base`}
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
