import { ComponentProps } from 'react';

type Pointer = {
  title: string;
  description: string;
  salary: string;
}

export type MapProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    pointers: Pointer[];
};
