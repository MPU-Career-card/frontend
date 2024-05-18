import { ComponentProps } from 'react';

export type SpecialtiesCardsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    faculty: string;
};
