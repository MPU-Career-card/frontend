import { ComponentProps } from 'react';

type Link = {
  to: string;
  title: string;
  description: string;
}

export type LinksProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    links: Link[];
};
