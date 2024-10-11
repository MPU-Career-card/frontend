import { FC } from 'react';

import { cn, useWindowDimensions } from 'shared/lib';
import { ArrowLink, Text } from 'shared/ui';
import { Arrow } from 'shared/icons';

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
    linkTag = 'link',
    ...props
}) => {
    const sizeCategory = useWindowDimensions();

    return (
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

            {['xxl', 'xl', 'l'].includes(sizeCategory) && (
                <div className={styles.footer}>
                    {children[1]}
                    <div className={highlight ? styles.highlightArrow : styles.arrow}>
                        <ArrowLink
                            width={highlight ? 64 : 38}
                            to={to}
                            color={color}
                            linkTag={linkTag}
                        />
                    </div>
                </div>

            )}
            {['xs', 's', 'm'].includes(sizeCategory) && (
                <div className={styles.mobileFooter}>
                    {children[1]}
                </div>
            )}
        </div>
    );
};
