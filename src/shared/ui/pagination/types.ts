import { ComponentProps } from 'react';

export type PaginationProps = ComponentProps<'div'> & {
  pages: number;
};
