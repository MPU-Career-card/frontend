import React, { ReactElement, FC, cloneElement } from 'react';

import { cn } from 'shared/lib';

import { ScrollProps } from './types';

import styles from './scroll.module.scss';

export const Scroll: FC<ScrollProps> = ({
    gap = 5,
    children,
}) => {
    const childrenArray = React.Children
        .toArray(children) as ReactElement[];

    return (
        <div
            className={cn(
                styles.scroll,
            )}
            style={{ gap }}
        >
            {childrenArray.map((card) => cloneElement(
                card,
            ))}
        </div>
    );
};
