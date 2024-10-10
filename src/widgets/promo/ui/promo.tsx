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
            <div className={styles.info}>
                <div className={styles.title}>
                    <Text
                        size={['xs', 's', 'm'].includes(size) ? 'l' : 'xl3'}
                        weight="bold"
                        color="white"
                        view="montserrat"
                        zIndex={2}
                    >
                        {title}
                    </Text>
                </div>
                <div className={styles.description}>
                    <Text
                        size={['xs', 's', 'm'].includes(size) ? 'xs2' : 'xs'}
                        view="montserrat"
                    >
                        {description}
                    </Text>
                </div>
            </div>
        </div>
    );
};
