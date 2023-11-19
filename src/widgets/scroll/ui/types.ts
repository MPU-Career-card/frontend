import { ComponentProps } from 'react';

export type ScrollProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
};
