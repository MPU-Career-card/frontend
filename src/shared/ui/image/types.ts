import { ComponentProps, ReactElement } from 'react';

export interface ImageProps extends Omit<ComponentProps<'img'>, 'alt' | 'onError'> {
  alt: ReactElement | null;
}
