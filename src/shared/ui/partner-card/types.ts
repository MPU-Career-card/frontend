import { ComponentProps } from 'react';

export interface PartnerCardProps extends ComponentProps<'div'> {
  to: string;
  image: string;
}
