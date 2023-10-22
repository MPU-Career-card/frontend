import React, { FC } from 'react';

import { cn } from 'shared/lib';

import { InputProps } from './types';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    type = 'text',
    size = 's',
    align = 'start',
    border = false,
}) => (
    <input
        className={cn(
            styles[size],
            styles[align],
            styles[border ? 'border' : 'borderless'],
        )}
        type={type}
    />
);
