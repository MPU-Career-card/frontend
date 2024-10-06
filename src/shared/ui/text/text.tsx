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
    view = 'montserat',
    weight = 'regular',
    caps = false,
    breakWords = false,
    isResponsive = false,
    to,
    className,
    children,
    zIndex,
    ...props
}) => (
    <ConditionalWrapper
        condition={!!to}
        wrapper={(children: ReactNode) => (
            <Link to={to!}>
                {children}
            </Link>
        )}
    >
        <Tag
            className={cn(
                className,
                styles.text,
                styles[size],
                styles[weight],
                styles[color],
                styles[view],
                styles[breakWords ? 'breakWords' : ''],
                {
                    [styles.relative]: zIndex,
                    [styles['is-responsive']]: isResponsive,
                },
            )}
            style={{ zIndex }}
            {...props}
        >
            {caps ? children.toString().toUpperCase() : children}
        </Tag>
    </ConditionalWrapper>
);
