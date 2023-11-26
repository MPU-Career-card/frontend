import { ComponentProps } from 'react';

export type FooterProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
};
