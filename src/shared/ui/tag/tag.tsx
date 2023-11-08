import React, { FC } from 'react';

import { cn } from 'shared/lib';
import { Text } from 'shared/ui';

import { TagProps } from './types';

import styles from './tag.module.scss';

export const Tag: FC<TagProps> = ({
    children,
    color = 'white',
    textColor = 'black',
    size = 'm',
    weight = 'regular',
    view = 'gilroy',
    caps,
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
        <Text
            color={textColor}
            size={size}
            view={view}
            weight={weight}
            caps={caps}
        >
            {children}
        </Text>
    </div>
);
