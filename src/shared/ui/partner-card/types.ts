import { ComponentProps } from 'react';

export interface PartnerCardProps extends ComponentProps<'div'> {
  name: string;
  to: string;
  image: string;
}
