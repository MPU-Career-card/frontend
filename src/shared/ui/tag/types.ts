import { ComponentProps } from 'react';

export type TagProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: string;
  color?: 'white' | 'black' | 'orange' | 'gray';
  textColor?: 'black' | 'white' | 'purple' | 'dark-gray'| 'grey';
  view?: 'gilroy' | 'verdana' | 'montserrat';
  size?: 'xs2' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xl2' |'xl3';
  sizePadding?: 'xs2' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xl2' |'xl3';
  center?: 'start' | 'center' | 'end';
  weight?: 'regular' | 'medium' | 'semi' | 'bold';
  caps?: boolean;
};
