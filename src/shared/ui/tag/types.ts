import { ComponentProps } from 'react';

export type TagProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: string;
  color?: 'white' | 'black' | 'orange' | 'gray'
  size?: 'xs' | 's' | 'm' | 'l';
};
