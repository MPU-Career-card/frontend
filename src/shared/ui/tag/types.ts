import { ComponentProps, FC } from 'react';

export type TagProps = ComponentProps<'div'> & {
  color?: 'white' | 'black' | 'orange';
  size?: 'xs' | 's' | 'm' | 'l';
};
