import { ComponentProps } from 'react';

import { Color } from 'shared/types';

export type ArrowLinkProps = ComponentProps<'div'> & {
    color: Color;
    to: string;
    width?: number;
    linkTag?: 'link' | 'a';
    mobile?: boolean;
};
