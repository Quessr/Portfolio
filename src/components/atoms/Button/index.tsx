import styled from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps extends React.PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ size = 'md', ...rest }: ButtonProps) => {
  return <StyledButton className={`btn-${size}`} {...rest} />;
};

const StyledButton = styled.button`
  ${tw`h-12 w-12 min-w-max`}
  ${tw`text-purple-500`}
  ${tw`border-2 border-purple-500 rounded-lg`}
  ${tw`focus:ring-1 focus:ring-purple-500`}

  //sizes
  &.btn-sm {
    ${tw`h-10 w-10`}
  }
  &.btn-lg {
    ${tw`h-14 w-14`}
  }
`;

export default Button;
