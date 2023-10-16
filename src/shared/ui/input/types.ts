import { ComponentProps } from 'react';

type InputType =
  | 'password'
  | 'text'
  | 'number'
  | 'tel'
  | 'search'
  | 'time'
  | 'date'
  | 'url'
  | 'email';

export type InputProps = ComponentProps<'input'> & {
  type?: InputType;
  value?: string;
  size?: 'xs' | 's' | 'm' | 'l';
  align?: 'center' | 'start' | 'end';
  borderless?: boolean;
};
