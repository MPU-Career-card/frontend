import { ComponentProps, ReactNode } from 'react';

import { Color } from 'shared/types';

export type CardLinkProps = Omit<ComponentProps<'div'>, 'children'> & {
  to: string;
  color: Color;
  highlight?: boolean;
  children: [ReactNode, ReactNode];
  isResponsiveHeight?: boolean;
}
