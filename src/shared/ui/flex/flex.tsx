import { FC } from 'react';

import { cn } from 'shared/lib';

import { FlexProps } from './types';

import styles from './flex.module.scss';

export const Flex: FC<FlexProps> = ({
    direction = 'horizontal',
    align = 'center',
    justify = 'start',
    nowrap = false,
    marginTop,
    marginBottom,
    gap,
    children,
    className,
}) => (
    <div
        className={cn(
            className,
            styles.flex,
            styles[direction],
            styles[`align-${align}`],
            styles[`justify-${justify}`],
            {
                nowrap,
            },
        )}
        style={{ gap, marginTop, marginBottom }}
    >
        {children}
    </div>
);
