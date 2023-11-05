import { ComponentProps, FC } from 'react';

export type PaginationProps = ComponentProps<'div'> & {
  pages: number;
};
