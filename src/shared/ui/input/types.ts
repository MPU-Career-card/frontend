import { ComponentProps, ReactNode } from 'react';

export type InputProps = ComponentProps<'input'> & {
  value?: string;
  border?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  variant?: 'rounded' | 'outlined'
};
