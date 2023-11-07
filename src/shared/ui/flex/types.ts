import { ComponentProps } from 'react';

export type FlexProps = ComponentProps<'div'> & {
  direction?: 'horizontal' | 'vertical';
  align?: 'center' | 'start' | 'end' | 'baseline';
  justify?:
      'center' | 'start' | 'end' |
      'space-between' | 'space-around' | 'space-evenly';
  nowrap?: boolean;
  gap?: number;
};
