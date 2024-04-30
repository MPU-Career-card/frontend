import { ComponentProps } from 'react';

type Speciality = {
  link: string;
  faculty: string,
  speciality: string,
}

export type SpecialtiesProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    bachelors: Speciality[];
    masters: Speciality[];
    dpo: Speciality[];
};

export type SpecialityContentProps = {
  tab: string;
  bachelors: Speciality[];
  masters: Speciality[];
  dpo: Speciality[];
}
