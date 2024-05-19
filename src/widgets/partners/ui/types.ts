import { ComponentProps } from 'react';

type Partner = {
  to: string;
  image: string;
  name: string;
}

export type PartnersProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    partners: Partner[];
};
