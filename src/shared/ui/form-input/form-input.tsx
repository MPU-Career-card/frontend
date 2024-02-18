import { forwardRef } from 'react';

import { FormInputProps } from './types';
import { cn } from '../../lib';

import styles from './form-input.module.scss';

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    (
        { label, className, ...props },
        ref,
    ) => (
        <input className={cn(styles.input, className)} {...props} ref={ref} />
    ),
);
