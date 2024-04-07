import React, { CSSProperties, FC } from 'react';

import { Text } from 'shared/ui';
import { Logo } from 'shared/icons';
import { useWindowDimensions } from 'shared/lib';

import { PromoProps } from './types';

import styles from './promo.module.scss';

export const Promo: FC<PromoProps> = ({ image, title, description }) => {
    const size = useWindowDimensions({ xs: 524 });

    const style: CSSProperties = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div style={style} className={styles.promo}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.title}>
                <Text
                    size={size === 'xs' ? 'xl' : 'xl3'}
                    weight="medium"
                    zIndex={2}
                >
                    {title}
                </Text>
            </div>
            <div className={styles.decorative} />
            <div className={styles.description}>
                <Text size="s">
                    {description}
                </Text>
            </div>
        </div>
    );
};
