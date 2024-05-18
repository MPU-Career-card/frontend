import React, { FC } from 'react';

import { InputProps } from './types';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    type = 'text',
    placeholder,
    icon,
    variant = 'rounded',
    ...props
}) => (
    <div className={styles[variant]}>
        { icon }
        <input
            placeholder={placeholder}
            type={type}
            {...props}
        />
    </div>
);
