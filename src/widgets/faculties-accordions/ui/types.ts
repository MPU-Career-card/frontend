import { ComponentProps } from 'react';

export type SpecialtiesAccordionsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    faculties: string[];
};
