import { ComponentProps } from 'react';

export type AccordionProps = ComponentProps<'div'> & {
    justify?:
    'center' | 'start' | 'end' |
    'space-between' | 'space-around' | 'space-evenly';
};
