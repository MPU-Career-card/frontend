import { FC } from 'react';

import { cn, useWindowDimensions } from 'shared/lib';
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
    linkTag = 'link',
    isMobileProps = false,
    ...props
}) => {
    const sizeCategory = useWindowDimensions();
    const isMobile = ['xs', 's', 'm'].includes(sizeCategory);

    const arrowStyle = () => {
        if (isMobileProps && isMobile) {
            return styles.mobileArrow;
        }
        return highlight ? styles.highlightArrow : styles.arrow;
    };
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
            {(!isMobile) && <div className={styles.footer}>{children[1]}</div>}
            <div className={arrowStyle()}>
                <ArrowLink
                    width={highlight ? 64 : 38}
                    to={to}
                    color={color}
                    linkTag={linkTag}
                    mobile={isMobile && isMobileProps}
                />
            </div>
        </div>
    );
};
