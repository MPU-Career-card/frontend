import { FC } from 'react';

import { cn } from 'shared/lib';
import { ArrowLink } from 'shared/ui';

import { CardLinkProps } from './types';

import styles from './card-link.module.scss';

export const CardLink: FC<CardLinkProps> = ({
    to,
    className,
    color,
    children,
}) => (
    <div className={cn(styles.wrapper, color, className)}>
        <div className={styles.header}>{children[0]}</div>
        <div className={styles.footer}>{children[1]}</div>
        <div className={styles.arrow}>
            <ArrowLink
                to={to}
                color={color}
            />
        </div>
    </div>
);
