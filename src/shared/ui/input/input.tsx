import React, { FC } from 'react';

import { cn } from 'shared/lib';

import { InputProps } from './types';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    type = 'text',
    size = 's',
    align = 'start',
    // borderless = false,
}) => (
    <input
        className={cn(
            styles[size],
            styles[align],
            // {styles[borderless : 'borderless'] }
        )}
        type={type}
    />
);
