import { ComponentProps } from 'react';

export type TagProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: string;
  color?: 'white' | 'black' | 'orange' | 'gray' | 'purple';
  textColor?: 'black' | 'white' | 'purple' | 'dark-gray'| 'grey';
  view?: 'gilroy' | 'verdana' | 'montserrat';
  size?: 'xs2' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xl2' |'xl3';
  weight?: 'regular' | 'medium' | 'semi' | 'bold';
  width?: 'left' | 'right';
  caps?: boolean;
};
