import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  color?: 'black' | 'white' | 'purple' | 'darkGray';
  size?: 'xs' | 's' | 'm' | 'l';
  border?: boolean;
};
