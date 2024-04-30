import React, { FC } from 'react';

import { ContainerProps } from './types';
import { cn } from '../../lib';

import styles from './container.module.scss';

export const Container: FC<ContainerProps> = ({ children, className }) => (
    <div className={cn(styles.container, className)}>
        {children}
    </div>
);
