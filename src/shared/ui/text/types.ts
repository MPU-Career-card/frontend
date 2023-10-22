import { ComponentProps } from 'react';

type TagType = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextProps = Omit<ComponentProps<TagType>, 'children'> & {
  children: string;
  tag?: TagType;
  view?: 'primary' | 'secondary';
  color?: 'black' | 'white' | 'purple';
  size?: 'xs' | 's' | 'm' | 'l';
  weight?: 'regular' | 'bold';
  caps?: boolean;
  to?: string;
};