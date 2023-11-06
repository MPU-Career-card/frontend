import React, { FC } from 'react';

import { cn } from 'shared/lib';
import { Text } from 'shared/ui';

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
            color,
            styles[size],
            styles.tag,
        )}
        {...props}
    >
        <Text size="xs">
            {children}
        </Text>
    </div>
);
