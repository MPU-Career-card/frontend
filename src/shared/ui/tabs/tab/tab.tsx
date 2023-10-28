import React, { FC } from 'react';

import { cn } from 'shared/lib';

import { TabProps } from './types';

import styles from './tab.module.scss';

export const Tab: FC<TabProps> = ({
    active,
    onClick,
    children,
    roundedSide,
}) => (
    <button
        className={cn(
            styles.tab,
            styles[active ? 'active' : ''],
            styles[roundedSide!],
        )}
        type="button"
        onClick={onClick}
    >
        {children}
    </button>
);
