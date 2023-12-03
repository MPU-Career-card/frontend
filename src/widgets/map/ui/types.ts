import { ComponentProps } from 'react';

export type MapProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    pointers?: number;
};
