import { ComponentProps } from 'react';

export type TagProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: string;
  color?: 'white' | 'black' | 'gray'
  size?: 'xs' | 's' | 'm' | 'l';
};
