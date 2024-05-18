import { ComponentProps } from 'react';

import { Speciality } from 'shared/types/speciality';

export type SpecialtiesCardsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    professions: Speciality['professions'];
};
