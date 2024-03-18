import { ComponentProps } from 'react';

type Pointer = {
  title: string;
  description: string;
  minSalary: number;
  maxSalary?: number;
}

export type MapProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    pointers: Pointer[];
};
