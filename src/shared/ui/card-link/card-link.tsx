import { FC } from 'react';

import { cn } from 'shared/lib';
import { ArrowLink } from 'shared/ui';

import { CardLinkProps } from './types';

import styles from './card-link.module.scss';

export const CardLink: FC<CardLinkProps> = ({
    to,
    className,
    color,
    highlight = true,
    children,
    isResponsiveHeight = false,
    isFullWidth = false,
    isFullHeight = false,
    ...props
}) => (
    <div
        className={cn(
            styles.wrapper,
            color,
            className,
            {
                [styles['is-responsive-height']]: isResponsiveHeight,
                [styles['is-full-width']]: isFullWidth,
                [styles['is-full-height']]: isFullHeight,
            },
        )}
        {...props}
    >
        <div className={styles.header}>{children[0]}</div>
        <div className={styles.footer}>{children[1]}</div>
        <div className={highlight ? styles.highlightArrow : styles.arrow}>
            <ArrowLink
                width={highlight ? 64 : 38}
                to={to}
                color={color}
            />
        </div>
    </div>
);
