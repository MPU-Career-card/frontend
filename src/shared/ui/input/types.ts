import { ComponentProps } from 'react';

export type InputProps = ComponentProps<'input'> & {
  value?: string;
  size?: 'xs' | 's' | 'm' | 'l';
  align?: 'center' | 'start' | 'end';
  border?: boolean;
};
