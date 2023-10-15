import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { cn } from 'shared/lib';
import { ConditionalWrapper } from 'shared/ui';

import { TextProps } from './types';

import styles from './text.module.scss';

export const Text: FC<TextProps> = ({
    tag: Tag = 'div',
    color = 'black',
    size = 's',
    view = 'primary',
    weight = 'regular',
    caps = false,
    to,
    className,
    children,
    ...props
}) => (
    <ConditionalWrapper
        condition={!!to}
        wrapper={(children: ReactNode) => (
            <Link to={to!}>
                {children }
            </Link>
        )}
    >
        <Tag
            className={cn(
                styles.text,
                styles[size],
                styles[weight],
                styles[color],
                styles[view],
            )}
            {...props}
        >
            {caps ? children.toUpperCase() : children}
        </Tag>
    </ConditionalWrapper>
);
