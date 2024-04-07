import { ComponentProps } from 'react';

type TagType = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextProps = Omit<ComponentProps<TagType>, 'children'> & {
  children: string | number;
  tag?: TagType;
  view?: 'gilroy' | 'verdana' | 'montserrat';
  color?: 'black' | 'white' | 'purple' | 'dark-gray' | 'grey' | 'pink'
  | 'greyTransparent' | 'blue';
  size?: 'xs2' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xl2' | 'xl3';
  weight?: 'regular' | 'medium' | 'semi' | 'bold';
  caps?: boolean;
  to?: string;
  breakWords?: boolean;
  zIndex?: number;
  isResponsive?: boolean;
};
