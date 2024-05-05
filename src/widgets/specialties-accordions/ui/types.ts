import { ComponentProps } from 'react';

import { Speciality } from 'shared/types';

export type SpecialtiesAccordionsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    specialities: Speciality[]
};
