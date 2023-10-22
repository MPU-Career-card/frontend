import React, { FC } from 'react';

import { cn } from 'shared/lib';

import { TagProps } from './types';

import styles from './tag.module.scss';

export const Tag: FC<TagProps> = ({
    children,
    color = 'white',
    size = 'm',
    ...props
}) => (
    <div
        className={cn(
            styles[color],
            styles[size],
            styles.tag,
        )}
        {...props}
    >
        {children}
    </div>
);
