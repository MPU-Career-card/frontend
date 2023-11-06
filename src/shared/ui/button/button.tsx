import { FC } from 'react';

import { cn } from 'shared/lib';

import { ButtonProps } from './types';

import styles from './button.module.scss';

export const Button: FC<ButtonProps> = ({
    color = 'black',
    size = 'm',
    border = false,
    children,
    ...props
}) => (
    <button
        className={cn(
            styles.button,
            styles[size],
            styles[color],
            styles[border ? 'border' : ''],
        )}
        type="button"
        {...props}
    >
        {children}
    </button>
);
