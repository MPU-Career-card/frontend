import { ComponentProps } from 'react';

export type CardsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
};
