import { ComponentProps } from 'react';

export type TagProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: string;
  color?: 'white' | 'black' | 'orange' | 'gray';
  textColor?: 'black' | 'white' | 'purple' | 'dark-gray'| 'grey';
  view?: 'gilroy' | 'verdana' | 'montserrat';
  size?: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'medium' | 'semi' | 'bold';
  caps?: boolean;
};
