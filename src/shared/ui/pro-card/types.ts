import { Color } from 'shared/types';

export type ProCardProps = {
  to: string;
  color: Color;
  header?: string;
  body?: string;
  tags?: string[];
  footer?: string;
  isResponsiveHeight?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isMobileProps?: boolean;
}
