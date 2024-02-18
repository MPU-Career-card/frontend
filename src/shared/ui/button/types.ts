import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  color?: 'black' | 'white' | 'purple' | 'darkGray';
  size?: 's' | 'm' | 'l';
  rounded?: boolean;
};
