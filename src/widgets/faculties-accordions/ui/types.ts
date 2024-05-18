import { ChangeEvent, ComponentProps } from 'react';

import { Specialities } from 'shared/types';

export type SpecialtiesAccordionsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    specialities: Specialities;
    getSpecialities: (faculty: string) => Promise<void>;
    onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
