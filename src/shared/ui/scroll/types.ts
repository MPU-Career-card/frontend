import { ComponentProps } from 'react';

export type ScrollProps = ComponentProps<'div'> & {
    justify?:
    'center' | 'start' | 'end' |
    'space-between' | 'space-around' | 'space-evenly';
};
