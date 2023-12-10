import React, { CSSProperties, FC } from 'react';

import { Text } from 'shared/ui';
import { Logo } from 'shared/icons';

import { PromoProps } from './types';

import styles from './promo.module.scss';

export const Promo: FC<PromoProps> = ({ image, title, description }) => {
    const style: CSSProperties = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div style={style} className={styles.promo}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.title}>
                <Text size="xl3" weight="medium">
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
