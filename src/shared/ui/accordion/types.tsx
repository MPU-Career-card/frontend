import { ComponentProps, ReactElement } from 'react';

import { WithRequired } from 'shared/types';

export type AccordionProps = WithRequired<ComponentProps<'div'>, 'children'> & {
    tags?: ReactElement;
    text: string;
    onOpen?: () => void;
};
