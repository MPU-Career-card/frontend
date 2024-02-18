import { Color } from 'shared/types';

export type ProCardProps = {
  to: string;
  color: Color;
  header?: string;
  body?: string;
  tags?: string[];
  isResponsiveHeight?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
}
