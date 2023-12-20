import React, { FC } from 'react';

import { cn } from 'shared/lib';
import { SearchIcon } from 'shared/icons';

import { InputProps } from './types';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    type = 'text',
    size = 's',
    align = 'start',
    border = false,
    placeholder,
    icon = false,
    onChange,
}) => (
    <div className={cn(
        styles.inputWrapper,
        styles[border ? 'border' : ''],
    )}
    >
        { icon && (
            <SearchIcon />
        )}
        <input
            className={cn(
                styles.input,
                styles[size],
                styles[align],
            )}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    </div>
);
