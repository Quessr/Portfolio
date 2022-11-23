import styled from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps extends React.PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline';
}

const Button = ({ size = 'md', variant = 'fill', ...rest }: ButtonProps) => {
  return <StyledButton className={`btn-${size} btn-${variant}`} {...rest} />;
};

const StyledButton = styled.button`
  ${tw`min-w-max`}
  ${tw`text-purple-500`}
  ${tw`border-2 border-purple-500 rounded-lg`}
  ${tw`focus:ring-1 focus:ring-purple-500`}

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
  }
  &.btn-outline {
    ${tw`bg-white`}
    ${tw`text-purple-500`}
  }
`;

export default Button;
