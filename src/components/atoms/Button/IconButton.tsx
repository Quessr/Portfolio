import clsx from 'clsx';
import { ReactNode } from 'react';
import 'twin.macro';

import Button, { ButtonProps } from '.';
import TrashIcon from '../Icons/TrashIcon';

export interface IconButtonProps
  extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
  icon?: ReactNode;
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <Button tw="p-0" {...rest}>
      {icon}
    </Button>
  );
};

export default IconButton;
