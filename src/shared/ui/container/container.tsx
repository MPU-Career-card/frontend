import React, { FC } from 'react';

import { ContainerProps } from './types';

import styles from './container.module.scss';

export const Container: FC<ContainerProps> = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);
