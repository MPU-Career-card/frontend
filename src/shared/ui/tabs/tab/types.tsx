import { ComponentProps } from 'react';

export type TabProps = ComponentProps<'button'> & {
  value: string;
  active?: boolean;
  roundedSide?: 'left' | 'right';
};
